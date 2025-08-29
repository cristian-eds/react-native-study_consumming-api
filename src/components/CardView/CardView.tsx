import { View, Text, Button, Image } from 'react-native'

import { styles } from './CardViewStyles'

import Logo from '../../../assets/logo.png';
import Divider from '../Divider/Divider';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';
import BuyButton from '../BuyButton/BuyButton';
import { useEffect, useState } from 'react';
import { CarModel } from './props';
import { handleNextItem, handlePreviousItem, loadCarData } from './actions';

const CardView = () => {

    const [carData, setCarData] = useState<CarModel | null>(null);

    useEffect(() => {
        const fetch = async () => {
            await loadCarData(2, setCarData);
        }
        fetch();
    },[])

    

    const renderLogoBox = () => (
        <View style={styles.containerLogo}>
            <Image source={Logo} style={styles.imageLogo} />
        </View>
    );

    const renderCarDetail = () => (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.carBrand}>Lamborguini</Text>
            <Text style={styles.carName}>{carData?.carName}</Text>
        </View>
    )

    const renderCarImage = () => (
        <Image
            style={styles.image}
            source={
                { uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`}
            } />
    )

    const renderPriceControls = () => (
        <View style={styles.priceLabelContainer}>
            <Button title='<' color={'#01A6B3'} onPress={() => handlePreviousItem(carData, setCarData)}/>
            <Text style={styles.priceLabel}>{carData?.price}</Text>
            <Button title='>' color={'#01A6B3'} onPress={() => {handleNextItem(carData, setCarData)}}/>
        </View>
    )

    return (
        <View style={styles.containerImage}>
            {renderLogoBox()}
            <Divider />
            {renderCarDetail()}
            {renderCarImage()}
            <Divider />
            <BuyButton />
            {renderPriceControls()}
        </View>
    )
}



export default CardView 
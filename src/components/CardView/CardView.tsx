import { View, Text, Button, Image } from 'react-native'

import { styles } from './CardViewStyles'

import Logo from '../../../assets/logo.png';
import Divider from '../Divider/Divider';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';
import BuyButton from '../BuyButton/BuyButton';
import { useEffect, useState } from 'react';
import { CarModel } from './props';
import { loadCarData } from './actions';

const CardView = () => {

    const [carData, setCarData] = useState<CarModel | null>(null);

    useEffect(() => {
        (async () => {
            await loadCarData(1, setCarData);
        })
    },[])

    const renderLogoBox = () => (
        <View style={styles.containerLogo}>
            <Image source={Logo} style={styles.imageLogo} />
        </View>
    );

    const renderCarDetail = () => (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.carBrand}>Lamborguini</Text>
            <Text style={styles.carName}>Model</Text>
        </View>
    )

    const renderCarImage = () => (
        <Image
            style={styles.image}
            source={
                { uri: `${CAR_ASSETS_BASE_URL}2.png`}
            } />
    )

    const renderPriceControls = () => (
        <View style={styles.priceLabelContainer}>
            <Button title='<' color={'#01A6B3'} onPress={() => {}}/>
            <Text style={styles.priceLabel}>VALOR</Text>
            <Button title='>' color={'#01A6B3'} onPress={() => {}}/>
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
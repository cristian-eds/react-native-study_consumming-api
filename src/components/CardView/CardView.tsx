import { View, Text, Button, Image } from 'react-native'

import { styles } from './CardViewStyles'

import Logo from '../../../assets/logo.png';
import Divider from '../Divider/Divider';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';

const CardView = () => {

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

    return (
        <View style={styles.containerImage}>
            {renderLogoBox()}
            <Divider />
            {renderCarDetail()}
            {renderCarImage()}
            <Divider />
        </View>
    )
}



export default CardView 
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 8
    },
    containerLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 200,
        resizeMode: 'contain'
    },
    imageLogo: {
        flex: 1,
        width: '65%',
        resizeMode: 'contain'
    },
    carBrand: {
        color: '#fff',
        fontWeight: 400,
        fontSize: 18,
        fontStyle: 'italic'
    },
    carName: {
        color: '#fFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center"
    },
    image: {
        flex: 1,
        marginBottom: 10,
        width: '100%',
        height: '100%'
    },
    priceLabelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 20,
        alignItems: 'center',
        marginTop: 10
    },
    priceLabel:{
        color: 'white',
        fontSize: 22
    }
})


import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#1E1E20',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cameraBox: {
        borderWidth: 2,
        width: 350,
        height: '85%',
        overflow: 'hidden',
        borderRadius: 10,
        borderColor: "#fff",
        position:'relative'
    },
    triangleCorner: {
       position: 'absolute',
       width: 0,
       height: 0,
       borderStyle: 'solid',
       borderTopWidth: 20,
       borderTopColor: '#fff',
       borderRightWidth: 20,
    },
    topRight: {
        right: 0,
        transform: [{
            rotate: '90deg'
        }]
    },
    leftBottom: {
        bottom: 0,
        left:0,
        transform: [{
            rotate: '270deg'
        }]
    },
    rightBottom: {
        bottom: 0,
        right: 0,
        transform: [{
            rotate: '180deg'
        }]
    }
})
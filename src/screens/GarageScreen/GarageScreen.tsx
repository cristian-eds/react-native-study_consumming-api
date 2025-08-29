import { Text, View } from "react-native"

import {styles} from './GarageScreenStyles'

const GarageScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cameraBox}>
          <View style={styles.triangleCorner}></View>
          <View style={[styles.triangleCorner, styles.topRight]}></View>
          <View style={[styles.triangleCorner, styles.leftBottom]}></View>
          <View style={[styles.triangleCorner, styles.rightBottom]}></View>
        </View>
        <Text>Works</Text>
    </View>
  )
}

export default GarageScreen
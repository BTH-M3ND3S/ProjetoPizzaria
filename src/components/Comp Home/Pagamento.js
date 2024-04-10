import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'

export default function Pagamento({handle}) {
  return (
    <View style={styles.container}>
        <Image source={require('../Comp Você/imagebg.png')} style={styles.backgroundImage} />

        <TouchableOpacity onPress={() => handle(false)} style={{ position: 'absolute', top: 20, left: 20 }}>
        <View style={{ backgroundColor: 'red', borderRadius: 50, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="arrow-left" size={20} color="white" />
        </View>

        <View style={styles.container2}>
            <View style={styles.ViewCartao}>

            </View>
            <View style={styles.ViewPix}>

            </View>
            <View style={styles.SaldoConta}>

            </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: "absolute",
      width: '100%',
      height: '100%',
    },
    container2: {

    },
    





    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      width: '100%',
      height: '100%',
      position: 'absolute',
    },
  });
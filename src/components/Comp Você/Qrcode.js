import React from 'react'
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Ionicons, AntDesign } from '@expo/vector-icons'; // Importar o pacote de ícones Ionicons
import CamQrCode from './CamQrCode';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default  function Qrcode( {handle} ) {
  const [camqrcode, setCamQrcode] = useState(false);

  //-------------FAVORITOS---------------------
    if (camqrcode === true) {
      return(
        <CamQrCode handle={ setCamQrcode }/>
      ) 
    }
    function exibirCamQrCode() {
      setCamQrcode(true)
    }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image source={require('./imagebg.png')} style={styles.backgroundImage} />
      <View style={styles.container}>
      <View style={styles.enterContainer}>
          <Text style={styles.enterText}>Dispositivos Conectados</Text>
          <AntDesign name="qrcode" size={28} color="white" left={20} onPress={exibirCamQrCode} />
        </View>
        <View style={styles.separator}></View>
      </View>
      <TouchableOpacity onPress={() => handle(false)} style={{ position: 'absolute', top: 20, left: 20 }}>
        <View style={{ backgroundColor: 'red', borderRadius: 50, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="arrow-left" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    left: 50,
  },
  enterContainer: {
    flexDirection: 'row',
    top: 60,
    left: 30,
    alignItems: 'center',
  },
  enterText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  separator: {
    position: 'absolute',
    top: 120,
    left: 20,
    right: 20,
    borderBottomWidth: 3, // Aumentando o tamanho da linha para 4 pixels
    borderBottomColor: 'white',
  },
  listContainer: {
    marginTop: 170,
    paddingHorizontal: 28,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  itemText: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
  },
});

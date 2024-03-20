import React from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import { Ionicons, AntDesign } from '@expo/vector-icons'; // Importar o pacote de ícones Ionicons

export default  function Pagamentos( {handle} ) {
  return (
    <View style={{ flex: 1 }}>
      <Image source={require('./imagebg.png')} style={styles.backgroundImage} />
      <View style={styles.container}>
      <View style={styles.enterContainer}>
          <Text style={styles.enterText}>Dispositivos Conectados</Text>
          <AntDesign name="qrcode" size={28} color="white" left={20} />
        </View>
        <View style={styles.separator}></View>
      </View>
      <Button title="Voltar" onPress={() => handle(false)} />
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
    left: 30,
    right: 30,
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

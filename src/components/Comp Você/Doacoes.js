import React from 'react'
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

export default  function Doacoes( {handle} ) {
  return (
    <View style={styles.container}>
      

      <Image source={require('./imagebg.png')} style={styles.backgroundImage} />
          <AntDesign name="frown" size={64} color="white" />
          <Text style={styles.textocartao}>A gente não possui nenhuma doação</Text>
       
          <TouchableOpacity onPress={() => handle(false)} style={{ position: 'absolute', top: 20, left: 20 }}>
        <View style={{ backgroundColor: 'red', borderRadius: 50, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="arrow-left" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  textocartao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 18
  },
 
})


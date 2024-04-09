import React, { useContext } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { UserContext } from '../../Context/UserContext';




export default  function AdicionarSaldo( {handle} ) {

  const{saldo, setSaldo} = useContext( UserContext );
  const[ saldoteste, setSaldoTeste] = useState("")
  return (
    <View style={styles.Container}>
      <Image source={require('../Comp Você/imagebg.png')} style={styles.backgroundImage} />
        <TouchableOpacity onPress={() => handle(false)} style={{ position: 'absolute', top: 20, left: 20 }}>
        <View style={{ backgroundColor: 'red', borderRadius: 50, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="arrow-left" size={20} color="white" />
        </View>
      </TouchableOpacity>   
      <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Informe o valor do saldo a ser adicionado:</Text>
      <TextInput value={saldo} onChangeText={(text) => setSaldo(text)} keyboardType='numeric' textContentType='telephoneNumber' style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1, marginTop: 20, padding: 10, color: "white" }} placeholder='R$00,00' placeholderTextColor={'white'}/>
      <TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 20, marginTop: 20, backgroundColor: 'red', padding: 10, width: 300, textAlign: 'center' }}  onPress={()=> (setSaldo(parseFloat(saldo) + parseFloat(saldoteste)), setSaldoTeste(""))}>Adicionar</Text>
      </TouchableOpacity>
      {/*<TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 20, marginTop: 20, backgroundColor: 'red', padding: 10, width: 300, textAlign: 'center' }} onPress={()=> setSaldo(0)}>limpar saldo</Text>
  </TouchableOpacity>*/}
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%', 
    backgroundColor: 'white',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
})
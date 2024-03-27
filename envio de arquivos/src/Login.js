import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from './Context/UserContext';

export default function Login() {

    const [ email, setEmail] = useState("");
    const [ senha, setSenha] = useState("");
    const [ erro, setErro] = useState();

    const {Login} = useContext(UserContext)

    function realizaLogin(){
      Login(email , senha)
    }
    
  return (
    <View style={styles.container}>
        <Text>Faça seu Login</Text>
      <TextInput
        style={styles.input}
        placeholder='Email'
        placeholderTextColor='#A9A9A9'
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        style={styles.input}
        placeholder='Senha'
        placeholderTextColor='#A9A9A9'
        secureTextEntry={true}
         onChangeText={(e) => setSenha(e)}
         value={senha}
      />
      <TouchableOpacity style={styles.button} onPress={realizaLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      { erro && <Text>Dados invalidos, tente novamente!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#FF6347',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

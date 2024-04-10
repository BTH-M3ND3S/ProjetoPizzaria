import { useContext, useState } from 'react'
import { View, Text,StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { UserContext } from '../Context/UserContext'

export default function Login() {

  const{Login} = useContext( UserContext );
  
  const [ email, setEmail] = useState("");
    const [ senha, setSenha] = useState("");
    const [ erro, setErro] = useState();

  function realizarLogin()
  {
    Login( email, senha );
  }
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 30, marginBottom: 40}}>Faça seu Login</Text>
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
      <TouchableOpacity style={styles.button} onPress={realizarLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      { erro && <Text>Dados invalidos, tente novamente!</Text>}
    </View>
  )
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
import { useContext } from 'react'
import { View, Text } from 'react-native'
import { UserContext } from '../Context/UserContext'

export default function Login() {

  const{Login} = useContext( UserContext );

  function realizarLogin()
  {
    Login( "", "" );
  }
  return (
    <View>
      <Text>LOGIN</Text>
    </View>
  )
}
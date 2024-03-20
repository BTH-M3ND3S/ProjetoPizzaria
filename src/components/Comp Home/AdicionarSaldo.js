import React from 'react'
import { View, Text, Button } from 'react-native'

export default  function AdicionarSaldo( {handle} ) {
  return (
    <View style={{height: "100%", width: "100%", position: "absolute"}}>
        <Button title="Voltar" onPress={() => handle( false ) } />
    </View>
  )
}
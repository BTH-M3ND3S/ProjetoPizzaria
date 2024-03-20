import React from 'react'
import { View, Text, Button } from 'react-native'

export default  function Favoritos ( {handle} ) {
  return (
    <View>
        <Button title="Voltar" onPress={() => handle( false ) } />
    </View>
  )
}


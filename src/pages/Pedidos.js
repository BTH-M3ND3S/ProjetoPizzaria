import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Pedidos() {
  return (
    <Image source={require('../images/imagebg.png')} style={styles.backgroundImage} />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Cupons({ handle }) {
  const cupons = [
    {
      id: 1,
      code: 'DESCONTO10',
      description: '10% de desconto em todos os produtos',
      expired: false
    },
    {
      id: 2,
      code: 'FRETEGRATIS',
      description: 'Frete grátis em compras acima de R$100,00',
      expired: false
    },
    {
      id: 3,
      code: 'DESCONTO20',
      description: '20% de desconto em produtos selecionados',
      expired: true
    }
  ];

  return (
    <View style={styles.container}>
      <Image source={require('../Comp Você/imagebg.png')} style={styles.backgroundImage} />
      <Text style={styles.title}>Lista de Cupons:</Text>
      {cupons.map(cupon => (
        <View key={cupon.id} style={styles.couponContainer}>
          <Text style={styles.couponCode}>Cupom: {cupon.code}</Text>
          <Text style={styles.couponDescription}>Descrição: {cupon.description}</Text>
          {cupon.expired && <Text style={styles.expiredText}>Expirado</Text>}
        </View>
      ))}
      <TouchableOpacity onPress={() => handle(false)} style={styles.backButton}>
        <View style={styles.backButtonContainer}>
          <Icon name="arrow-left" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  couponContainer: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  couponCode: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#444444',
  },
  couponDescription: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 10,
  },
  expiredText: {
    fontSize: 14,
    color: 'red',
    fontStyle: 'italic',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backButtonContainer: {
    backgroundColor: 'red',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

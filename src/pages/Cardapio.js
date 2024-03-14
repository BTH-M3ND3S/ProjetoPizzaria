import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import Img1 from '../images/image2.png'

const Cardapio = () => {
  const pizzas = [
    {
      id: 1,
      nome: 'Pizza Margherita',
      preco: 'R$ 30,00',
      descricao: 'Molho de tomate, muçarela e manjericão fresco.',
      imagem: Img1
    },
    {
      id: 2,
      nome: 'Pizza Pepperoni',
      preco: 'R$ 35,00',
      descricao: 'Molho de tomate, muçarela e pepperoni fatiado.',
      imagem: Img1
    },
    {
      id: 3,
      nome: 'Pizza Pepperoni',
      preco: 'R$ 35,00',
      descricao: 'Molho de tomate, muçarela e pepperoni fatiado.',
      imagem: Img1
    },
    {
      id: 4,
      nome: 'Pizza Pepperoni',
      preco: 'R$ 35,00',
      descricao: 'Molho de tomate, muçarela e pepperoni fatiado.',
      imagem: Img1
    },
    {
      id: 5,
      nome: 'Pizza Pepperoni',
      preco: 'R$ 35,00',
      descricao: 'Molho de tomate, muçarela e pepperoni fatiado.',
      imagem: Img1
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.container}>
        <View style={item % 2 === 0 ? styles.textContainerLeft : styles.textContainerRight}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.descricao}>{item.descricao}</Text>
          <Text style={styles.preco}>{item.preco}</Text>
        </View>
        <Image source={item.imagem} style={styles.imagem} />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={pizzas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainerLeft: {
    flex: 1,
    marginRight: 10,
  },
  textContainerRight: {
    flex: 1,
    marginLeft: 10,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: 16,
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});

export default Cardapio;

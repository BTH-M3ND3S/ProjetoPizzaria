import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import Img1 from '../images/image2.png';

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
       
        {index % 2 === 0 ? (
          <>
            <View style={styles.textContainer}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.descricao}>{item.descricao}</Text>
              <Text style={styles.preco}>{item.preco}</Text>
            </View>
            <Image source={item.imagem} style={styles.imagem} />
          </>
        ) : (
          <>
            <Image source={item.imagem} style={styles.imagem} />
            <View style={styles.textContainer}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.descricao}>{item.descricao}</Text>
              <Text style={styles.preco}>{item.preco}</Text>
            </View>
          </>
        )}
      </View>

    );
  };

  return (
    
    <View style={{ flex: 1, padding: 20 }}>
         
       <Image source={require('../images/imagebg.png')} style={styles.backgroundImage}/>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
  },
  Titulo: {
    textAlign: "center",
    fontSize: 50,
    color: "white",
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white"
  },
  descricao: {
    fontSize: 16,
    color: "white"
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "white"
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },

});

export default Cardapio;

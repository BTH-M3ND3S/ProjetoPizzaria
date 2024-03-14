import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, StatusBar, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { FontAwesome } from '@expo/vector-icons';

// Defina as pizzas como uma constante simples
const pizzas = [
  { id: 1, nome: "Pizza de Queijo", preco: 20.00, image: require('../images/image2.png') },
  { id: 2, nome: "Pizza de Pepperoni", preco: 22.00, image: require('../images/image2.png') },
  { id: 3, nome: "Pizza de Frango com Catupiry", preco: 25.00, image: require('../images/image2.png') },
  { id: 4, nome: "Pizza de Calabresa", preco: 21.00, image: require('../images/image2.png') },
  { id: 5, nome: "Pizza de Margherita", preco: 23.00, image: require('../images/image2.png') },
  { id: 6, nome: "Pizza de Vegetariana", preco: 24.00, image: require('../images/image2.png') },
];

export default function Home() {
  const carouselData = [
    require('../images/banner1.png'),
    require('../images/banner1.png'),
    require('../images/banner1.png'),
    require('../images/banner1.png'),
    require('../images/banner1.png'),
  ];

  const renderCarouselItem = ({ item }) => (
    <Image source={item} style={styles.carouselImage} />
  );

  const renderPizza = ({ item }) => {
    return (
      <View style={styles.pizza}>
        <Image source={item.image} style={styles.pizzaImage} />
        <View style={styles.infoContainer}>
          <Text style={styles.nomePizza}>{item.nome}</Text>
          <Text style={styles.precoPizza}>R$ {item.preco.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.heartIconContainer}>
          <FontAwesome name="heart" size={20} color={'white'} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar/>
      <Image source={require('../images/imagebg.png')} style={styles.backgroundImage} />
      <View style={styles.navbar}>
        <Image source={require('../images/logo.png')} style={styles.logo} />
        <TouchableOpacity style={styles.searchButton}>
          <AntDesign name="search1" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.carouselContainer}>
        <Carousel
          data={carouselData}
          renderItem={renderCarouselItem}
          sliderWidth={300}
          itemWidth={300}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          activeSlideAlignment={'center'}
        />
        <Pagination
          dotsLength={carouselData.length}
          containerStyle={styles.pagination}
          dotStyle={styles.dot}
          inactiveDotStyle={styles.inactiveDot}
          inactiveDotOpacity={0.6}
          inactiveDotScale={0.8}
        />
      </View>
      <Text style={styles.text}>Melhores Avaliados</Text>
      <View style={styles.pizzaContainer}>
        <FlatList
          data={pizzas}
          renderItem={renderPizza}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  carouselContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'transparent',
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
    marginLeft:150
  },
  searchButton: {
    backgroundColor: 'transparent',
  },
  carouselImage: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
  },
  pizzaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  pizza: {
    width: 100,
    height: 150,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  pizzaImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    objectFit: "cover",
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nomePizza: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  precoPizza: {
    color: 'white',
    fontSize: 14,
  },
  heartIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'transparent',
  },
  pagination: {
    marginTop: -20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
  inactiveDot: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  text: {
    color: "white",
    fontSize: 20,
    marginLeft: 25,
    marginTop: 10,
  },
});

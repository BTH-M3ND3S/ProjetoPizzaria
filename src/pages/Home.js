import React, { useState, useEffect, useRef, useContext } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, StatusBar, FlatList } from 'react-native';
import { FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { UserContext } from '../Context/UserContext';



const pizzas = [
  { id: 1, nome: "Pizza", sobrenome: "Portuguesa", avaliacao: 5.0, image: require('../images/image2.png') },
  { id: 2, nome: "Pizza", sobrenome: "Calabresa", avaliacao: 4.9, image: require('../images/image3.png') },
  { id: 3, nome: "Pizza", sobrenome: "Frango com Catupiry", avaliacao: 5.0, image: require('../images/image4.png') },
  { id: 4, nome: "Pizza", sobrenome: "Margherita", avaliacao: 4.8, image: require('../images/image5.png') },
  { id: 5, nome: "Pizza", sobrenome: "Presunto e Queijo", avaliacao: 4.7, image: require('../images/image6.png') },
  { id: 6, nome: "Pizza", sobrenome: "A Furiosa", avaliacao: 4.9, image: require('../images/image7.png') },
];

export default function Home() {
  const { saldo } = useContext(UserContext)
  const { usuario } = useContext(UserContext)
  const [favorite, setFavorite] = useState([]);

  async function AdicionarFavorito(id) {
    try {
      const existepizza = await AsyncStorage.getItem('favoritos');
      let favoritasexistem = existepizza ? JSON.parse(existepizza) : [];
      const filterPizza = favoritasexistem.filter(item => item.id == id);
      if (filterPizza.length > 0) {
        console.warn(`Pizza com o ID ${id} já está favoritada.`);
        return;
      }
      const pizza = pizzas.filter(item => item.id == id);
      favoritasexistem.push( pizza[0] );
      const novafavoritos = JSON.stringify(favoritasexistem);
      await AsyncStorage.setItem('favoritos', novafavoritos);
      setFavorite(favoritasexistem);
    } catch (error) {
      console.error('Erro ao adicionar a pizza às favoritas:', error);
    }
  };
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        alert("Sem internet")
      }
    });

    return () => unsubscribe();
  }, []);

  const isFavorite = (id) => favorite.filter( item => item.id === id );

  const renderPizza = ({ item }) => {
    return (
      <View style={styles.pizza}>
        <Image source={item.image} style={styles.pizzaImage} />
        <View style={styles.infoContainer}>
          <Text style={styles.nomePizza}>{item.nome}</Text>
          <Text style={styles.nomeEmbaixoPizza}>{item.sobrenome}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={12} color="yellow" />
          <Text style={styles.avaliacao}>{item.avaliacao}</Text>
        </View>
        <TouchableOpacity
          style={styles.heartIconContainer}
          onPress={() => AdicionarFavorito(item.id)}
          onLongPress={() => RemoverFavorito(item.id)}
        >
          <FontAwesome
            name={isFavorite(item.id) ? "heart" : "heart-o"}
            size={20}
            color={isFavorite(item.id) ? 'red' : 'white'}
            style={{ padding: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Image source={require('../images/imagebg.png')} style={styles.backgroundImage} />
      <View style={styles.navbar}>
        <View>
          <Text style={{ color: "white" }}>{usuario}</Text>
          <Text style={{ color: "white" }}>R${saldo}</Text>
        </View>
        <Image source={require('../images/logo.png')} style={styles.logo} />
        <TouchableOpacity style={styles.searchButton}>
          <AntDesign name="search1" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.notificationButton}>
          <Entypo name="bell" size={24} color="red" />
        </TouchableOpacity>
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

      <View style={styles.chatButtonContainer}>
        <TouchableOpacity style={styles.chatButton}>
          <FontAwesome name="comments" size={20} color="white" />
        </TouchableOpacity>
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
    marginLeft: 45  
  },
  searchButton: {
    backgroundColor: 'transparent',
  },
  pizzaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  pizza: {
    width: 115,
    height: 150,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'red',
  },
  pizzaImage: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  nomePizza: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  nomeEmbaixoPizza: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  heartIconContainer: {
    position: 'absolute',
    left: 83,
  },
  ratingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderTopRightRadius: 10,
  },
  avaliacao: {
    color: 'white',
    fontSize: 12,
    marginLeft: 2,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
  },
  inactiveDot: {
    backgroundColor: 'lightgray',
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 25,
    marginTop: 10,
  },
  notificationButton: {
    marginRight: 5,
  },
  chatButtonContainer: {
    position: 'absolute',
    bottom: 28,
    right: 20,
    backgroundColor: 'red',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatButton: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

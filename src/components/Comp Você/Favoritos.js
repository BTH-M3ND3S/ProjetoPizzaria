import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Favoritos({handle}) {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const asyncPizzas = await AsyncStorage.getItem('favoritos');
        if (asyncPizzas) {
          const pizzasFormatadas = JSON.parse(asyncPizzas);
          setPizzas(pizzasFormatadas);
        }
      } catch (error) {
        console.error('Erro ao recuperar favoritos:', error);
      }
    };

    getFavorites();
  }, []);

  const removePizza = async (id) => {
    try {
      const novasPizzas = pizzas.filter(pizza => pizza.id !== id);
      setPizzas(novasPizzas);
      await AsyncStorage.setItem('favoritos', JSON.stringify(novasPizzas));
    } catch (error) {
      console.error('Erro ao remover pizza dos favoritos:', error);
    }
  };

  const renderPizza = ({ item }) => {
    return (
      <View style={styles.pizzaItem}>
        <View style={styles.pizzaInfo}>
          <Text style={styles.pizzaName}>{item.nome} {item.sobrenome}</Text>
          <Text style={styles.pizzaRating}>Avaliação: {item.avaliacao}</Text>
          <TouchableOpacity onPress={() => removePizza(item.id)} style={styles.removeButton}>
            <Text style={styles.removeButtonText}>Remover dos Favoritos</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar/>
      
            <Image source={require('./imagebg.png')} style={styles.backgroundImage} />
            <Text style={{fontSize: 40, color: "white", marginLeft: 130, fontWeight: "bold", marginTop: 10 }}>Favoritos</Text>
      <TouchableOpacity onPress={() => handle(false)} style={{ position: 'absolute', top: 20, left: 20 }}>
        <View style={{ backgroundColor: 'red', borderRadius: 50, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="arrow-left" size={20} color="white" />
        </View>
      </TouchableOpacity>
      <FlatList
        data={pizzas}
        renderItem={renderPizza}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  pizzaItem: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
    flexDirection: 'row',
  },
  pizzaImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  pizzaInfo: {
    flex: 1,
  },
  pizzaName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  pizzaRating: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  removeButton: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

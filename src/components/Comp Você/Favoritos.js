import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Favoritos() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const asyncpizzas = await AsyncStorage.getItem('favoritos');
        if (asyncpizzas) {
          const pizzasformatadas = JSON.parse(asyncpizzas);
          setPizzas(pizzasformatadas);
        }
      } catch (error) {
        console.error('Erro ao recuperar favoritos:', error);
      }
    };

    getFavorites();
  }, []);
  const renderPizza = ({ item }) => {
    return (
      <View key={item.id} style={styles.pizzaItem}>
        <Text style={styles.pizzaName}>{item.nome} {item.sobrenome}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={pizzas}
        renderItem={renderPizza}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pizzaItem: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 10,
  },
  pizzaName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

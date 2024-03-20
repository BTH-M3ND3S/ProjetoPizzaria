import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';

function Favoritos() {
  /*const [favoritos, setFavoritos] = useState([]);

  async function PegarFavorito() {
    try {
      const favoritosArmazenados = await AsyncStorage.getItem('favorites');
      if (favoritosArmazenados !== null) {
        setFavoritos(JSON.parse(favoritosArmazenados));
      }
    } catch (error) {
      console.error('Erro ao recuperar favoritos:', error);
    }
  }

  useEffect(() => {
    PegarFavorito();
  }, []);

  return (
    <View>  
      <Text>Meus Favoritos: </Text>
      {favoritos.map((pizza, index) => (
        <View key={index} style={{ marginBottom: 10 }}>
          <Text>Nome: {pizza.nome} {pizza.sobrenome}</Text>
          <Text>Avaliação: {pizza.avaliacao}</Text>
          <Image source={pizza.image}/>
          
         
        </View>
      ))}
    </View>
  );
*/
}

export default Favoritos;

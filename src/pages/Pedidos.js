import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

export default function Pedidos() {
 
  const pedidos = [
    {
      id: 1,
      data: '15/03/2024',
      horaPedido: '10:00',
      horaBalconista: '10:05',
      horaMotoboy: '10:20',
      avaliacao: 4,
    },
    {
      id: 2,
      data: '15/03/2024',
      horaPedido: '10:30',
      horaBalconista: '10:35',
      horaMotoboy: '10:50',
      avaliacao: 5,
    },
    {
      id: 3,
      data: '15/03/2024',
      horaPedido: '10:30',
      horaBalconista: '10:35',
      horaMotoboy: '10:50',
      avaliacao: 5,
    },
   
  ];

  return (
    <View style={styles.container}>
          <Image source={require('../images/imagebg.png')} style={styles.backgroundImage}/>
          <View style={styles.navbar}> 
          <Text style={styles.Titulo}>Pedidos</Text>
          <Image source={require('../images/logo.png')} style={styles.logo} />
          </View>
          <Text style={styles.Subtitulo}>Você tem {pedidos.length} Pedidos na Pizzaria</Text>
     
      {pedidos.map((pedido, index) => (
        <View key={index} style={styles.pedidoContainer}>
          <Text style={styles.data}>{pedido.data}</Text>
          <Text style={styles.id}>ID do Pedido: {pedido.id} - Pizzaria</Text>
          <View style={styles.infoRow}>
          <AntDesign name="pushpin" size={24} color="red" />
            <Text>{pedido.horaPedido}</Text>
            <FontAwesome name="eye" size={20} color="red" />
            <Text>{pedido.horaBalconista}</Text>
            <FontAwesome name="motorcycle" size={20} color="red" />
            <Text>{pedido.horaMotoboy}</Text>
            <View style={styles.avaliacao}>
              <FontAwesome name="star" size={20} color="yellow" />
              <Text> {pedido.avaliacao}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: "center"
  },
  Titulo: {
    textAlign: "center",
    fontSize: 50,
    color: "white"
  },
  Subtitulo: {
    textAlign: "center",
    fontSize: 25,
    color: "white"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  pedidoContainer: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    elevation: 3, 
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
    marginLeft: 100
  },
  data: {
    fontWeight: 'bold',
  },
  id: {
    marginTop: 5,
  },
  infoRow: {
    marginTop: 10,
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between"
  },
  avaliacao: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

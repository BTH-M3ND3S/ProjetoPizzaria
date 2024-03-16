import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

export default function Pedidos() {
 
  const pedidos = [
    {
      id: 1,
      data: '15/03/2024',
      horaPedido: '19:56',
      horaBalconista: '19:58',
      horaMotoboy: '10:20',
      avaliacao: 5,
    },
    {
      id: 2,
      data: '08/12/2024',
      horaPedido: '14:13',
      horaBalconista: '14:16',
      horaMotoboy: '10:50',
      avaliacao: 4.9,
    },
    {
      id: 3,
      data: '07/07/2024',
      horaPedido: '17:39',
      horaBalconista: '17:42',
      horaMotoboy: '18:32',
      avaliacao: 4.7,
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
          <AntDesign name="pushpin" size={20} color="red" />
            <Text style={styles.horarioscontainer}>{pedido.horaPedido}</Text>
            <FontAwesome name="eye" size={20} color="red" />
            <Text style={styles.horarioscontainer}>{pedido.horaBalconista}</Text>
            <FontAwesome name="motorcycle" size={20} color="red" />
            <Text style={styles.horarioscontainer}>{pedido.horaMotoboy}</Text>
            <View style={styles.avaliacao}>
              <FontAwesome name="star" size={20} color="yellow" />
              <Text style={styles.horariosavaliacao}>{pedido.avaliacao}</Text>
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
    left: 125,
    fontSize: 38,
    color: "white",
    fontWeight: "bold",
  },
  Subtitulo: {
    textAlign: "center",
    fontSize: 22,
    color: "white",
    fontWeight: "bold"
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
    borderRadius: 7,
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
    left: 25,
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  data: {
    fontWeight: 'bold',
  },
  id: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  infoRow: {
    marginTop: 10,
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avaliacao: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  horarioscontainer: {
    fontWeight: 'bold',
    right: 21,
    top: 2,
  },
  horariosavaliacao: {
    fontWeight: 'bold',
    left: 1,
    }
});

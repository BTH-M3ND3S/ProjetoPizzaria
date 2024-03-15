import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

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
   
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.Titulo}>Pedidos</Text>
      {pedidos.map((pedido, index) => (
        <View key={index} style={styles.pedidoContainer}>
          <Text style={styles.data}>{pedido.data}</Text>
          <Text style={styles.id}>ID do Pedido: {pedido.id} - Pizzaria</Text>
          <View style={styles.infoRow}>
          <FontAwesome name="star" size={20} color="black" />
            <Text>: {pedido.horaPedido}</Text>
            <FontAwesome name="star" size={20} color="black" />
            <Text>: {pedido.horaBalconista}</Text>
            <FontAwesome name="star" size={20} color="black" />
            <Text>{pedido.horaMotoboy}</Text>
            <View style={styles.avaliacao}>
              <FontAwesome name="star" size={20} color="black" />
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
  },
  pedidoContainer: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    elevation: 3, 
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

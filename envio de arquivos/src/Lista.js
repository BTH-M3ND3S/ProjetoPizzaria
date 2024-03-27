// Lista.js
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Lista({ id, nome, inicio, final, onExcluir, onEditar }) {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.nome}>{inicio}</Text>
      <Text style={styles.nome}>{final}</Text>
      <TouchableOpacity style={styles.button1} onPress={() => onExcluir(id)}>
        <Text style={styles.buttonText}>Excluir</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => onEditar({ id, nome, inicio, final })}>
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
      </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    marginTop: 30,
    width: 350,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  button1: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  button2: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    width: 300,
    textAlign: "center"
  },
});

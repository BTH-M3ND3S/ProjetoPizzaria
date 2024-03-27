import { Text, View, StyleSheet } from 'react-native'
import React from 'react'


export default function Produto({ titulo, preco, categoria, data }) {
    return(
    <View style={styles.container}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.preco}>{preco}</Text>
        <Text style={styles.categoria}>{categoria}</Text>
        <Text style={styles.data}>{data}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    preco: {
        color: 'green',
        fontSize: 16,
        marginBottom: 4,
    },
    categoria: {
        fontStyle: 'italic',
        marginBottom: 4,
    },
    data: {
        color: 'gray',
    },
});
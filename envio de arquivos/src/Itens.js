import React from 'react'
import { FlatList, View, } from 'react-native'
import Produto from './Produto'

const dados = [
  {
    id: "01",
    titulo: "Tenis Nike",
    preco: "R$300",
    categoria: "Nike",
    data: new Date().toLocaleDateString()
  },
  {
    id: "02",
    titulo: "Tenis Adidas",
    preco: "R$300",
    categoria: "Adidas",
    data: new Date().toLocaleDateString()
  },
  {
    id: "03",
    titulo: "Tenis Puma",
    preco: "R$300",
    categoria: "Puma",
    data: new Date().toLocaleDateString()
  },
  {
    id: "04",
    titulo: "Tenis Olimpikus",
    preco: "R$300",
    categoria: "olimpikus",
    data: new Date().toLocaleDateString()
  },
  {
    id: "05",
    titulo: "Tenis Fila",
    preco: "R$300",
    categoria: "fila",
    data: new Date().toLocaleDateString()
  },
  {
    id: "06",
    titulo: "Tenis vans",
    preco: "R$300",
    categoria: "vans",
    data: new Date().toLocaleDateString()
  },
  {
    id: "07",
    titulo: "Tenis mizuno",
    preco: "R$300",
    categoria: "mizuno",
    data: new Date().toLocaleDateString()
  },
  {
    id: "08",
    titulo: "Tenis converse",
    preco: "R$300",
    categoria: "converse",
    data: new Date().toLocaleDateString()
  }
]



export default function Itens(){
  return (
    <View>
      <FlatList 
      data={dados} 
      renderItem={({item}) => <Produto titulo={item.titulo} preco={item.preco} categoria={item.categoria} data={item.data}/> }
       keyExtractor={item => item.id}/>
    </View>
  )
}



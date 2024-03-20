import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Img1 from '../images/image2.png';

const Cardapio = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'salgadas', title: 'Salgadas' },
    { key: 'doces', title: 'Doces' },
    { key: 'bebidas', title: 'Bebidas' },
    { key: 'diversos', title: 'Diversos' },
  ]);

  const [salgadas, setSalgadas] = useState([
    {
      id: 1,
      nome: 'Pizza Margherita',
      preco: 'R$ 30,00',
      descricao: 'Molho de tomate, muçarela e manjericão fresco.',
      imagem: Img1
    },
  ]);

  const [doces, setDoces] = useState([
    {
      id: 1,
      nome: 'Pizza Doce de Chocolate',
      preco: 'R$ 35,00',
      descricao: 'Chocolate, morangos e chantilly.',
      imagem: Img1
    },
  ]);

  const [bebidas, setBebidas] = useState([
    {
      id: 1,
      nome: 'Refrigerante Coca-Cola',
      preco: 'R$ 5,00',
      descricao: 'Lata 350ml.',
      imagem: Img1
    },
  ]);

  const [diversos, setDiversos] = useState([
    {
      id: 1,
      nome: 'Coxinha de Frango',
      preco: 'R$ 4,00',
      descricao: 'Unidade.',
      imagem: Img1
    },
  ]);

  const renderScene = SceneMap({
    salgadas: () => <ProductList produtos={salgadas} />,
    doces: () => <ProductList produtos={doces} />,
    bebidas: () => <ProductList produtos={bebidas} />,
    diversos: () => <ProductList produtos={diversos} />,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      style={styles.tabBar}
      indicatorStyle={styles.tabIndicator}
      labelStyle={styles.tabLabel}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <Image source={require('../images/imagebg.png')} style={styles.backgroundImage} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

const ProductList = ({ produtos }) => {
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
        <Text style={styles.preco}>{item.preco}</Text>
      </View>
      <Image source={item.imagem} style={styles.imagem} />
    </View>
  );

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
  },
  tabBar: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
  tabIndicator: {
    backgroundColor: 'white',
  },
  tabLabel: {
    color: 'white',
    fontSize: 14, 
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  descricao: {
    fontSize: 16,
    color: 'white',
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});

export default Cardapio;

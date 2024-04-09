import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Img1 from '../images/image2.png';
import SucoMaracuja from '../images/SucoMaracuja.png'
import SucoMorango from '../images/SucoMorango.png'
import SucoLaranja from '../images/SucoLaranja.png'
import AguaSemGas from '../images/AguaSemGas.png'
import AguaComGas from '../images/AguaComGas.png'
import PepsiBlack from '../images/PepsiBlack.png'
import Pepsi from '../images/Pepsi.png'
import CocaCola from '../images/CocaCola.png'
import CocaColaZero from '../images/CocaColaZero.png'
import TridentAzul from '../images/TridentAzul.png'
import TridentRosa from '../images/TridentRosa.png'
import HallsCinza from '../images/HallsCinza.png'
import HallsVerde from '../images/HallsVerde.png'
import ChitaFramboesa from '../images/ChitaFramboesa.png'
import ChitaAbacaxi from '../images/ChitaAbacaxi.png'
import ChitaUva from '../images/ChitaUva.png'
import ChitaMenta from '../images/ChitaMenta.png'
import BalaYogurte from '../images/BalaYogurte.png'
import Chocolate from '../images/Chocolate.png'
import Morango from '../images/Morango.png'
import Prestigio from '../images/Prestigio.png'
import RomeuJulieta from '../images/RomeuJulieta.png'
import Brigadeiro from '../images/Brigadeiro.png'
import DoceLeite from '../images/DoceLeite.png'
import Nutella from '../images/Nutella.png'
import MorangoComChocolate from '../images/MorangoComChocolate.png'
import Banana from '../images/Banana.png'

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
    {
      id: 2,
      nome: 'Pizza de Calabresa',
      preco: 'R$ 35,00',
      descricao: 'Calabresa, cebola, e azeitonas.',
      imagem: Img1
    },
    {
      id: 3,
      nome: 'Pizza de Frango com Catupiry',
      preco: 'R$ 33,00',
      descricao: 'Frango desfiado e catupiry.',
      imagem: Img1
    },
    {
      id: 4,
      nome: 'Pizza Portuguesa',
      preco: 'R$ 36,00',
      descricao: 'Presunto, queijo, ovo, cebola, azeitonas e tomate.',
      imagem: Img1
    },
    {
      id: 5,
      nome: 'Pizza de Pepperoni',
      preco: 'R$ 38,00',
      descricao: 'Pepperoni e muçarela.',
      imagem: Img1
    },
    {
      id: 6,
      nome: 'Pizza Quatro Queijos',
      preco: 'R$ 37,00',
      descricao: 'Muçarela, parmesão, provolone e gorgonzola.',
      imagem: Img1
    },
    {
      id: 7,
      nome: 'Pizza Vegetariana',
      preco: 'R$ 34,00',
      descricao: 'Pimentão, cebola, champignon, azeitonas e muçarela.',
      imagem: Img1
    },
    {
      id: 8,
      nome: 'Pizza de Atum',
      preco: 'R$ 35,00',
      descricao: 'Atum sólido e cebola.',
      imagem: Img1
    },
    {
      id: 9,
      nome: 'Pizza de Bacon',
      preco: 'R$ 36,00',
      descricao: 'Bacon e muçarela.',
      imagem: Img1
    }
  ]);

  const [doces, setDoces] = useState([
    {
      id: 1,
      nome: 'Pizza Doce de Chocolate',
      preco: 'R$ 35,00',
      descricao: 'Chocolate, morangos e chantilly.',
      imagem: Chocolate
    },
    {
      id: 2,
      nome: 'Pizza Doce de Banana',
      preco: 'R$ 32,00',
      descricao: 'Banana, açúcar e canela.',
      imagem: Banana
    },
    {
      id: 3,
      nome: 'Pizza Doce de Morango',
      preco: 'R$ 34,00',
      descricao: 'Morango fresco e leite condensado.',
      imagem: Morango
    },
    {
      id: 4,
      nome: 'Pizza Doce de Nutella',
      preco: 'R$ 38,00',
      descricao: 'Nutella e morangos.',
      imagem: Nutella
    },
    {
      id: 5,
      nome: 'Pizza Doce de Romeu e Julieta',
      preco: 'R$ 33,00',
      descricao: 'Goiabada e queijo.',
      imagem: RomeuJulieta
    },
    {
      id: 6,
      nome: 'Pizza Doce de Brigadeiro',
      preco: 'R$ 36,00',
      descricao: 'Brigadeiro e granulado.',
      imagem: Brigadeiro
    },
    {
      id: 7,
      nome: 'Pizza Doce de Prestígio',
      preco: 'R$ 37,00',
      descricao: 'Chocolate e coco ralado.',
      imagem: Prestigio
    },
    {
      id: 8,
      nome: 'Pizza Doce de Morango com Chocolate Branco',
      preco: 'R$ 39,00',
      descricao: 'Morango e chocolate branco.',
      imagem: MorangoComChocolate
    },
    {
      id: 9,
      nome: 'Pizza Doce de Doce de Leite',
      preco: 'R$ 38,00',
      descricao: 'Doce de leite e coco ralado.',
      imagem: DoceLeite
    }
  ]);

  const [bebidas, setBebidas] = useState([
    {
      id: 1,
      nome: 'Refrigerante Coca-Cola',
      preco: 'R$ 5,00',
      descricao: 'Lata 350ml',
      imagem: CocaCola
    },
    {
      id: 2,
      nome: 'Refrigerante Coca-Cola Zero',
      preco: 'R$ 5,00',
      descricao: 'Lata 350ml.',
      imagem: CocaColaZero
    },
    {
      id: 3,
      nome: 'Refrigerante Pepsi',
      preco: 'R$ 4,50',
      descricao: 'Lata 350ml',
      imagem: Pepsi
    },
    {
      id: 4,
      nome: 'Refrigerante Pepsi Black',
      preco: 'R$ 4,50',
      descricao: 'Lata 350ml',
      imagem: PepsiBlack
    },
    {
      id: 5,
      nome: 'Água Mineral Crystal sem Gás',
      preco: 'R$ 3,50',
      descricao: 'Garrafinha 500ml',
      imagem: AguaSemGas
    },
    {
      id: 6,
      nome: 'Água Mineral Crystal com Gás',
      preco: 'R$ 3,50',
      descricao: 'Garrafinha 500ml',
      imagem: AguaComGas
    },
    {
      id: 7,
      nome: 'Suco de Laranja Natural',
      preco: 'R$ 7,00',
      descricao: 'Copo 300ml',
      imagem: SucoLaranja
    },
    {
      id: 8,
      nome: 'Suco de Morango Polpa',
      preco: 'R$ 7,00',
      descricao: 'Copo 300ml',
      imagem: SucoMorango
    },
    {
      id: 9,
      nome: 'Suco de Maracujá Polpa',
      preco: 'R$ 7,00',
      descricao: 'Copo 300ml',
      imagem: SucoMaracuja
    }
  ]);

  const [diversos, setDiversos] = useState([
    {
      id: 1,
      nome: 'Trident Hortelã/Menta',
      preco: 'R$ 2,50',
      descricao: 'Unidade',
      imagem: TridentAzul
    },
    {
      id: 2,
      nome: 'Trident Tutti-Frutti',
      preco: 'R$ 2,50',
      descricao: 'Unidade',
      imagem: TridentRosa
    },
    {
      id: 3,
      nome: 'Halls Menta Prata',
      preco: 'R$ 2,00',
      descricao: 'Unidade',
      imagem: HallsCinza
    },
    {
      id: 4,
      nome: 'Halls Menta',
      preco: 'R$ 2,00',
      descricao: 'Unidade',
      imagem: HallsVerde
    },
    {
      id: 5,
      nome: 'Bala Chita Abacaxi',
      preco: 'R$ 0,50',
      descricao: 'Unidade',
      imagem: ChitaAbacaxi
    },
    {
      id: 6,
      nome: 'Bala Chita Framboesa',
      preco: 'R$ 0,50',
      descricao: 'Unidade',
      imagem: ChitaFramboesa
    },
    {
      id: 7,
      nome: 'Bala Chita Menta',
      preco: 'R$ 0,50',
      descricao: 'Unidade',
      imagem: ChitaMenta
    },
    {
      id: 8,
      nome: 'Bala Chita Uva',
      preco: 'R$ 0,50',
      descricao: 'Unidade',
      imagem: ChitaUva
    },
    {
      id: 9,
      nome: 'Bala Yogurte',
      preco: 'R$ 0,50',
      descricao: 'Unidade',
      imagem: BalaYogurte
    }
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
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  descricao: {
    fontSize: 12,
    color: 'orange',
    top: 8,
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    top: 12,
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});

export default Cardapio;

import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
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
import { UserContext } from '../Context/UserContext';

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
      imagem: Img1,
      quantidade: 0
    },
    {
      id: 2,
      nome: 'Pizza de Calabresa',
      preco: 'R$ 35,00',
      descricao: 'Calabresa, cebola, e azeitonas.',
      imagem: Img1,
      quantidade: 0
    },
    {
      id: 3,
      nome: 'Pizza de Frango com Catupiry',
      preco: 'R$ 33,00',
      descricao: 'Frango desfiado e catupiry.',
      imagem: Img1,
      quantidade: 0
    },
    {
      id: 4,
      nome: 'Pizza Portuguesa',
      preco: 'R$ 36,00',
      descricao: 'Presunto, queijo, ovo, cebola, azeitonas e tomate.',
      imagem: Img1,
      quantidade: 0
    },
    {
      id: 5,
      nome: 'Pizza de Pepperoni',
      preco: 'R$ 38,00',
      descricao: 'Pepperoni e muçarela.',
      imagem: Img1,
      quantidade: 0
    },
    {
      id: 6,
      nome: 'Pizza Quatro Queijos',
      preco: 'R$ 37,00',
      descricao: 'Muçarela, parmesão, provolone e gorgonzola.',
      imagem: Img1,
      quantidade: 0
    },
    {
      id: 7,
      nome: 'Pizza Vegetariana',
      preco: 'R$ 34,00',
      descricao: 'Pimentão, cebola, champignon, azeitonas e muçarela.',
      imagem: Img1,
      quantidade: 0
    },
    {
      id: 8,
      nome: 'Pizza de Atum',
      preco: 'R$ 35,00',
      descricao: 'Atum sólido e cebola.',
      imagem: Img1,
      quantidade: 0
    },
    {
      id: 9,
      nome: 'Pizza de Bacon',
      preco: 'R$ 36,00',
      descricao: 'Bacon e muçarela.',
      imagem: Img1,
      quantidade: 0
    }
  ]);

  const [doces, setDoces] = useState([
    {
      id: 10,
      nome: 'Pizza Doce de Chocolate',
      preco: 'R$ 35,00',
      descricao: 'Chocolate, morangos e chantilly.',
      imagem: Chocolate,
      quantidade: 0
    },
    {
      id: 11,
      nome: 'Pizza Doce de Banana',
      preco: 'R$ 32,00',
      descricao: 'Banana, açúcar e canela.',
      imagem: Banana,
      quantidade: 0
    },
    {
      id: 12,
      nome: 'Pizza Doce de Morango',
      preco: 'R$ 34,00',
      descricao: 'Morango fresco e leite condensado.',
      imagem: Morango,
      quantidade: 0
    },
    {
      id: 13,
      nome: 'Pizza Doce de Nutella',
      preco: 'R$ 38,00',
      descricao: 'Nutella e morangos.',
      imagem: Nutella,
      quantidade: 0
    },
    {
      id: 14,
      nome: 'Pizza Doce de Romeu e Julieta',
      preco: 'R$ 33,00',
      descricao: 'Goiabada e queijo.',
      imagem: RomeuJulieta,
      quantidade: 0
    },
    {
      id: 15,
      nome: 'Pizza Doce de Brigadeiro',
      preco: 'R$ 36,00',
      descricao: 'Brigadeiro e granulado.',
      imagem: Brigadeiro,
      quantidade: 0
    },
    {
      id: 16,
      nome: 'Pizza Doce de Prestígio',
      preco: 'R$ 37,00',
      descricao: 'Chocolate e coco ralado.',
      imagem: Prestigio,
      quantidade: 0
    },
    {
      id: 17,
      nome: 'Pizza Doce de Morango com Chocolate Branco',
      preco: 'R$ 39,00',
      descricao: 'Morango e chocolate branco.',
      imagem: MorangoComChocolate,
      quantidade: 0
    },
    {
      id: 18,
      nome: 'Pizza Doce de Doce de Leite',
      preco: 'R$ 38,00',
      descricao: 'Doce de leite e coco ralado.',
      imagem: DoceLeite,
      quantidade: 0
    }
  ]);

  const [bebidas, setBebidas] = useState([
    {
      id: 19,
      nome: 'Refrigerante Coca-Cola',
      preco: 'R$ 5,00',
      descricao: 'Lata 350ml',
      imagem: CocaCola,
      quantidade: 0
    },
    {
      id: 20,
      nome: 'Refrigerante Coca-Cola Zero',
      preco: 'R$ 5,00',
      descricao: 'Lata 350ml.',
      imagem: CocaColaZero,
      quantidade: 0
    },
    {
      id: 21,
      nome: 'Refrigerante Pepsi',
      preco: 'R$ 4,50',
      descricao: 'Lata 350ml',
      imagem: Pepsi,
      quantidade: 0
    },
    {
      id: 22,
      nome: 'Refrigerante Pepsi Black',
      preco: 'R$ 4,50',
      descricao: 'Lata 350ml',
      imagem: PepsiBlack,
      quantidade: 0
    },
    {
      id: 23,
      nome: 'Água Mineral Crystal sem Gás',
      preco: 'R$ 3,50',
      descricao: 'Garrafinha 500ml',
      imagem: AguaSemGas,
      quantidade: 0
    },
    {
      id: 24,
      nome: 'Água Mineral Crystal com Gás',
      preco: 'R$ 3,50',
      descricao: 'Garrafinha 500ml',
      imagem: AguaComGas,
      quantidade: 0
    },
    {
      id: 25,
      nome: 'Suco de Laranja Natural',
      preco: 'R$ 7,00',
      descricao: 'Copo 300ml',
      imagem: SucoLaranja,
      quantidade: 0
    },
    {
      id: 26,
      nome: 'Suco de Morango Polpa',
      preco: 'R$ 7,00',
      descricao: 'Copo 300ml',
      imagem: SucoMorango,
      quantidade: 0
    },
    {
      id: 27,
      nome: 'Suco de Maracujá Polpa',
      preco: 'R$ 7,00',
      descricao: 'Copo 300ml',
      imagem: SucoMaracuja,
      quantidade: 0
    }
  ]);

  const [diversos, setDiversos] = useState([
    {
      id: 28,
      nome: 'Trident Hortelã/Menta',
      preco: 'R$ 2,50',
      descricao: 'Unidade',
      imagem: TridentAzul,
      quantidade: 0
    },
    {
      id: 29,
      nome: 'Trident Tutti-Frutti',
      preco: 'R$ 2,50',
      descricao: 'Unidade',
      imagem: TridentRosa,
      quantidade: 0
    },
    {
      id: 30,
      nome: 'Halls Menta Prata',
      preco: 'R$ 2,00',
      descricao: 'Unidade',
      imagem: HallsCinza,
      quantidade: 0
    },
    {
      id: 31,
      nome: 'Halls Menta',
      preco: 'R$ 2,00',
      descricao: 'Unidade',
      imagem: HallsVerde,
      quantidade: 0
    },
    {
      id: 32,
      nome: 'Bala Chita Abacaxi',
      preco: 'R$ 0,50',
      descricao: 'Unidade',
      imagem: ChitaAbacaxi,
      quantidade: 0
    },
    {
      id: 33,
      nome: 'Bala Chita Framboesa',
      preco: 'R$ 0,50',
      descricao: 'Unidade',
      imagem: ChitaFramboesa,
      quantidade: 0
    },
    {
      id: 34,
      nome: 'Bala Chita Menta',
      preco: 'R$ 0,50',
      descricao: 'Unidade',
      imagem: ChitaMenta,
      quantidade: 0
    },
    {
      id: 35,
      nome: 'Bala Chita Uva',
      preco: 'R$ 0,50',
      descricao: 'Unidade',
      imagem: ChitaUva,
      quantidade: 0
    },
    {
      id: 36,
      nome: 'Bala Yogurte',
      preco: 'R$ 0,50',
      descricao: 'Unidade',
      imagem: BalaYogurte,
      quantidade: 0
    }
  ]);

  const [ticket, setTicket] = useState([]);
  const[ vizuticket, setVizuTicket] = useState(false)
  const[ valorTotal, setValorTotal] = useState(false)
  const{totalTicket, setTotalTicket} = useContext(UserContext)

  const adicionarAoTicket = (produto) => {
    if (produto.quantidade > 0) {
      const index = ticket.findIndex(item => item.id === produto.id);
      if (index !== -1) {
        const updatedTicket = [...ticket];
        updatedTicket[index].quantidade += produto.quantidade;
        setTicket(updatedTicket);
      } else {
        setTicket([...ticket, { ...produto }]);
      }
      console.log(ticket);
      setVizuTicket(true);
    } else {
      alert("Coloque uma quantidade de produto válida!")
      console.log("A quantidade do produto é 0, não será adicionado ao ticket.");
    }
  };
  useEffect(() => {
      let total = 0;
      ticket.forEach(item => {
        total += parseFloat(item.preco.replace('R$ ', '')) * item.quantidade;
      });
      setValorTotal(total.toFixed(2));
      setTotalTicket(total.toFixed(2));
  },[ticket])
  

  const renderScene = SceneMap({
    salgadas: () => <ProductList produtos={salgadas} setProdutos={setSalgadas} adicionarAoTicket={adicionarAoTicket} />,
    doces: () => <ProductList produtos={doces} setProdutos={setDoces} adicionarAoTicket={adicionarAoTicket} />,
    bebidas: () => <ProductList produtos={bebidas} setProdutos={setBebidas} adicionarAoTicket={adicionarAoTicket} />,
    diversos: () => <ProductList produtos={diversos} setProdutos={setDiversos} adicionarAoTicket={adicionarAoTicket} />,
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
     {!vizuticket ? <></>:
    <View style={styles.ticketContainer}>
        <Text style={styles.ticketTitle}>Ticket</Text>
        <FlatList
          data={ticket}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.ticketItem}>
              <Text>{item.nome}</Text>
              <Text>Quantidade: {item.quantidade}</Text>
              <Text>Preço:{item.preco}</Text>
            </View>
          )}
        />
        <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Valor Total: R$ {valorTotal}</Text>
          </View>
        <View style={{display: "flex", flexDirection: "row"}}>
        <TouchableOpacity onPress={()=> {setTicket([]); setVizuTicket(false) }} style={{width: 200,height: 50, backgroundColor: "gray", alignItems: "center", justifyContent: "center"}}>
          <Text style={{color: 'white', fontSize: 18, textAlign: "center", alignItems: "center"}}>Limpar Ticket</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 200, height: 50, backgroundColor: "red", alignItems: "center", justifyContent: "center"}}>
          <Text style={{color: 'white', fontSize: 18, textAlign: "center"}}>Adicionar Pedido</Text>
        </TouchableOpacity>
        </View>
        </View>
     }
    </View>
  );
};

const ProductList = ({ produtos, setProdutos, adicionarAoTicket }) => {
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Image source={item.imagem} style={styles.imagem} />
      <View style={{marginLeft: 15, maxWidth: 200}}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
        <Text style={styles.preco}>{item.preco}</Text>
        </View>
      </View>
      
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => { decrementQuantity(item.id) }}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantidade}</Text>
        <TouchableOpacity onPress={() => { incrementQuantity(item.id) }}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={() => { adicionarAoTicket(item) }}>
          <Text style={styles.addButtonText}>Adicionar ao Ticket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const incrementQuantity = (id) => {
    const updatedProdutos = produtos.map(prod => {
      if (prod.id === id) {
        return { ...prod, quantidade: prod.quantidade + 1 }
      }
      return prod;
    });
    setProdutos(updatedProdutos);
  };

  const decrementQuantity = (id) => {
    const updatedProdutos = produtos.map(prod => {
      if (prod.id === id && prod.quantidade > 0) {
        return { ...prod, quantidade: prod.quantidade - 1 }
      }
      return prod;
    });
    setProdutos(updatedProdutos);
  };

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
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  ticketContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 10,
  },
  ticketTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  ticketItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 5.5
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  descricao: {
    fontSize: 16,
    color: 'gray',
  },
  preco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'orange',
    marginTop: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    fontWeight: 'bold',
    color: 'red',
    paddingHorizontal: 12,
  },
  quantity: {
    color: 'black',
    fontSize: 20,
    paddingHorizontal: 15,
  },
  addButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginLeft: 15,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  tabBar: {
    backgroundColor: 'black',
  },
  tabIndicator: {
    backgroundColor: 'white',
  },
  tabLabel: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default Cardapio;
import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserProvider, { UserContext } from '../../Context/UserContext';
import Pagamento from './Pagamento';
import AsyncStorage from '@react-native-async-storage/async-storage';

let lista = [];



export default function AdicionarPedido({ handle }) {
  const [pagamento, setPagamento] = useState(false);
  const [ticket, setTicket] = useState([]);
  const [corno, setCorno] = useState();

  async function getTicket() {
    try {
      const localTicket = await AsyncStorage.getItem("ticket");
      setTicket( JSON.parse(localTicket) );
    } catch (error) {
      console.error("Error retrieving ticket:", error);
    }
  }


  useEffect(() => {
    getTicket();
  }, [ticket]);


  if (pagamento === true) {
    return (
      <Pagamento handle={setPagamento} />
    )
  }
  function exibirpagamento() {
    setPagamento(true)
  }

  return (

    <View style={styles.container}>
      <Image source={require('../Comp Você/imagebg.png')} style={styles.backgroundImage} />
      {ticket &&
        <View>
          {ticket.map(item => (
            <View style={styles.ticketItem}>
              <Text>{item.nome}</Text>
              <Text>Quantidade: {item.quantidade}</Text>
              <Text>Preço:{item.preco}</Text>
            </View>
          ))}
        </View>
      }




      <TouchableOpacity style={styles.cancelButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.paymentButton} onPress={exibirpagamento}>
        <View style={styles.button}>
          <Text style={styles.buttonText2}>Ir para Pagamento</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handle(false)} style={{ position: 'absolute', top: 20, left: 20 }}>
        <View style={{ backgroundColor: 'red', borderRadius: 50, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="arrow-left" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  cancelButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: "white"
  },
  paymentButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: "red"
  },
  button: {
    borderRadius: 50,
    width: 165,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  buttonText2: {
    color: 'white',
    fontSize: 16,
  },
  ticketItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

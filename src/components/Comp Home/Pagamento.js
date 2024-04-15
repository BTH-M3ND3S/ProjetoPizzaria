import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'
import { UserContext } from '../../Context/UserContext';
import { RadioButton } from 'react-native-paper';

export default function Pagamento({handle}) {
    const[ cartaoselect, setCartaoSelect] = useState(false)
    const[ pixselect, setPixSelect]= useState(false)
    const[ saldocontaselect, setSaldoContaSelect]= useState(false)
    const {totalTicket} = useContext(UserContext)
    
    const { saldo, setSaldo } = useContext(UserContext)

    const [cartoes, setCartoes] = useState([]);
    useEffect(() => {
      AsyncStorage.getItem('cartoes').then((value) => {
        if (value) {
          setCartoes(JSON.parse(value));
        }
      });
    }, []);

     function EfetuarPagamento(){
      if(saldocontaselect == true){
        if(saldo >= totalTicket){
          setSaldo(saldo - totalTicket)
          alert("Pagamento realizado com sucesso")
        } else {
          alert("Saldo insuficiente para realizar o pagamento")
        }
      }
    }
  return (
    <View style={styles.container}>
        <Image source={require('../Comp Você/imagebg.png')} style={styles.backgroundImage} />
        <Text style={{color: "white", fontSize: 35}}>Efetue seu Pagamento!</Text>
      <View style={styles.container2}>
        <Text style={{position: "absolute", top: 10, left: 10, fontSize: 20}}>R${totalTicket}</Text>
      <Text style={{fontSize: 20}}>Pague por pix:</Text>
        <View style={styles.Pixdiv}>
        <RadioButton
        value={pixselect}
        status={ pixselect === true ? 'checked' : 'unchecked' }
        onPress={() => 
        {
          setCartaoSelect(false)
          setPixSelect(true)
          setSaldoContaSelect(false)

        }}
      />
       <Image source={require('./images/pix.png')} style={styles.pixpng}/>
        </View>
        <Text style={{fontSize: 20}}>Pague com seu cartão:</Text>
        <View style={styles.Cartaodiv}>
        <RadioButton
        value={cartaoselect}
        status={ cartaoselect === true ? 'checked' : 'unchecked' }
        onPress={() => 
          {
            setCartaoSelect(true)
            setPixSelect(false)
            setSaldoContaSelect(false)
          
          }}
      />

        {cartoes.map((cartao, index) => (
              <View key={index}>             
                <Text style={{color: "white"}}>Número: {cartao.numero}</Text>
                <Text style={{color: "white"}}>Titular: {cartao.nomeTitular}</Text>
                <Text style={{color: "white"}}>Validade: {cartao.dataValidade}</Text>
                <Text style={{color: "white"}}>CVC: {cartao.cvc}</Text>
              </View>))}
        </View>
        <Text style={{fontSize: 20}}>Pague com seu Saldo da conta:</Text>
        <View style={styles.SaldoContadv}>
        <RadioButton
        value={saldocontaselect}
        status={ saldocontaselect === true ? 'checked' : 'unchecked' }
        onPress={() => 
          {
            setSaldoContaSelect(true)
            setPixSelect(false)
            setCartaoSelect(false)
          }}
      />
      <Text>{saldo}</Text>

        </View>
        </View>



        <TouchableOpacity style={styles.cancelButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentButton} onPress={EfetuarPagamento} >
          <View style={styles.button}>
            <Text style={styles.buttonText2} >Efetuar Pagamento</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handle(false)} style={{ position: 'absolute', top: 20, left: 20 }}>
          <View style={{ backgroundColor: 'red', borderRadius: 50, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="arrow-left" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>
  )
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
  container2: {
    width: "90%",
    height: 600,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center"
  },
  Cartaodiv: {
    width: "100%",
    height: 100,
    backgroundColor: "#CBCBCB",
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    borderRadius: 10
  },
  Pixdiv: {
    width: "100%",
    height: 100,
    backgroundColor: "#CBCBCB",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  pixpng: {
    height: 50,
    width: 50,
    objectFit: "contain"
  },
  SaldoContadv: {
    width: "100%",
    height: 100,
    backgroundColor: "#CBCBCB",
    alignItems: "center",
    display: "flex",
    flexDirection: "row"
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
  });
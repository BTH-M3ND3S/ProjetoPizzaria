import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Favoritos from '../components/Comp Você/Favoritos';
import Conversas from '../components/Comp Você/Conversas';
import Notificacoes from '../components/Comp Você/Notificacoes';
import Pagamentos from '../components/Comp Você/Pagamentos';
import Cupons from '../components/Comp Você/Cupons';
import Doacoes from '../components/Comp Você/Doacoes';
import Enderecos from '../components/Comp Você/Enderecos';
import MinhConta from '../components/Comp Você/MinhaConta';
import Configuracoes from '../components/Comp Você/Configuracoes';
import Qrcode from '../components/Comp Você/Qrcode';


export default function Voce() {

  const [favoritos, setFavoritos] = useState(false);
  const [notificacoes, setNotificacoes] = useState(false);
  const [conversas, setConversas] = useState(false);
  const [pagamentos, setPagamentos] = useState(false);
  const [cupons, setCupons] = useState(false);
  const [doacoes, setDoacoes] = useState(false);
  const [enderecos, setEnderecos] = useState(false);
  const [minhaconta, setMinhaConta] = useState(false);
  const [configuracoes, setConfiguracoes] = useState(false);
  const [qrcode, setQrcode] = useState(false);

//-------------FAVORITOS---------------------
  if (favoritos === true) {
    return(
      <Favoritos handle={ setFavoritos }/>
    ) 
  }
  function exibirfavoritos() {
    setFavoritos(true)
  }

//-------------NOTIFICACOES---------------------
if (notificacoes === true) {
  return(
    <Notificacoes handle={ setNotificacoes }/>
  ) 
}
function exibirnotificacoes() {
  setNotificacoes(true)
}

//-------------CONVERSAS---------------------
if (conversas === true) {
  return(
    <Conversas handle={ setConversas }/>
  ) 
}
function exibirconversas() {
  setConversas(true)
}

//-------------PAGAMENTOS---------------------
if (pagamentos === true) {
  return(
    <Pagamentos handle={ setPagamentos }/>
  ) 
}
function exibirpagamentos() {
  setPagamentos(true)
}

//-------------CUPONS---------------------
if (cupons === true) {
  return(
    <Cupons handle={ setCupons }/>
  ) 
}
function exibircupons() {
  setCupons(true)
}

//-------------DOACOES---------------------
if (doacoes === true) {
  return(
    <Doacoes handle={ setDoacoes }/>
  ) 
}
function exibirdoacoes() {
  setDoacoes(true)
}

//-------------ENDERECOS---------------------
if (enderecos === true) {
  return(
    <Enderecos handle={ setEnderecos }/>
  ) 
}
function exibirenderecos() {
  setEnderecos(true)
}

//-------------MINHA-CONTA---------------------
if (minhaconta === true) {
  return(
    <MinhConta handle={ setMinhaConta }/>
  ) 
}
function exibirminhaconta() {
  setMinhaConta(true)
}
//-------------CONFIGURACOES---------------------
if (configuracoes === true) {
  return(
    <Configuracoes handle={ setConfiguracoes }/>
  ) 
}
function exibirconfiguracoes() {
  setConfiguracoes(true)
}
//-------------QRCODE---------------------
if (qrcode === true) {
  return(
    <Qrcode handle={ setQrcode }/>
  ) 
}
function exibirqrcode() {
  setQrcode(true)
}
//-------------------------------------------

    return (
      <View style={styles.container}>
        <StatusBar />
        <Image source={require('../images/imagebg.png')} style={styles.backgroundImage} />
        <View style={styles.enterContainer}>
          <Ionicons name="person-circle" size={38} color="white" />
          <Text style={styles.enterText}>Entrar / Cadastrar</Text>
          <AntDesign name="qrcode" size={28} color="white" left={130} onPress={exibirqrcode} />
        </View>
        <View style={styles.separator}></View>
        <View style={styles.listContainer}>
          <Item icon="chatbubbles-outline" label="Conversas" onPress={exibirconversas}/>     
          <Item icon="notifications-outline" label="Notificações" onPress={exibirnotificacoes}/>
          <Item icon="card-outline" label="Pagamentos" onPress={exibirpagamentos}/>
          <Item icon="pricetag-outline" label="Cupons" onPress={exibircupons}/>
          <Item icon="heart-outline" label="Favoritos" onPress={exibirfavoritos}/>
          <Item icon="gift-outline" label="Doações" onPress={exibirdoacoes}/>
          <Item icon="location-outline" label="Endereços" onPress={exibirenderecos}/>
          <Item icon="person-circle-outline" label="Minha Conta" onPress={exibirminhaconta}/>
          <Item icon="settings-outline" label="Configurações" onPress={exibirconfiguracoes}/>
        </View>
      </View>
    );
}

const Item = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
    <Ionicons name={icon} size={24} color="white" style={{ marginRight: 10 }} />
    <Text style={styles.itemText}>{label}</Text>
    <AntDesign name="right" size={18} color="white" style={{ marginLeft: 'auto' }} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  enterContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 60,
    left: 30,
    alignItems: 'center',
  },
  enterText: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
    fontSize: 20,
  },
  separator: {
    position: 'absolute',
    top: 120,
    left: 30,
    right: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  listContainer: {
    marginTop: 170,
    paddingHorizontal: 28,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  itemText: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
  },
});

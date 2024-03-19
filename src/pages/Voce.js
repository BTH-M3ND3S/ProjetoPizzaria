import React from 'react';
import { View, Image, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'; // Importando os ícones
import Favoritos from './Favoritos'; // Ajuste o caminho conforme necessário
import { useNavigation } from '@react-navigation/native';

export default function Voce() {
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <StatusBar />
        <Image source={require('../images/imagebg.png')} style={styles.backgroundImage} />
        {/* Ícone de pessoa e texto "Entrar/Cadastrar" */}
        <View style={styles.enterContainer}>
          <Ionicons name="person-circle" size={38} color="white" />
          <Text style={styles.enterText}>Entrar / Cadastrar</Text>
          <AntDesign name="qrcode" size={28} color="white" left={130}/>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.listContainer}>
          <Item icon="chatbubbles-outline" label="Conversas" />     
          <Item icon="notifications-outline" label="Notificações" />
          <Item icon="card-outline" label="Pagamentos" />
          <Item icon="pricetag-outline" label="Cupons" />
          <Item icon="heart-outline" label="Favoritos" onPress={() => navigation.navigate('Favoritos')}/>
          <Item icon="gift-outline" label="Doações" />
          <Item icon="location-outline" label="Endereços" />
          <Item icon="person-circle-outline" label="Minha Conta" />
          <Item icon="settings-outline" label="Configurações" />
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

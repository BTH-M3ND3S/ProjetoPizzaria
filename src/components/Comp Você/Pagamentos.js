import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Modal, TextInput, StyleSheet, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';

export default function Pagamentos({ handle }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [numeroCartao, setNumeroCartao] = useState('');
  const [nomeTitular, setNomeTitular] = useState('');
  const [dataValidade, setDataValidade] = useState('');
  const [cvc, setCvc] = useState('');
  const [cartoes, setCartoes] = useState([]);
  const [cartaoCadastrado, setCartaoCadastrado] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('cartoes').then((value) => {
      if (value) {
        setCartoes(JSON.parse(value));
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('cartoes', JSON.stringify(cartoes));
  }, [cartoes]);

  const adicionarCartao = () => {
    // Validar os campos
    if (!numeroCartao || !nomeTitular || !dataValidade || !cvc) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Validar o formato do número do cartão (adicionar sua lógica de validação aqui)
    const regexNumeroCartao = /^[0-9]{16}$/; // Verifica se o número tem 16 dígitos
  if (!regexNumeroCartao.test(numeroCartao)) {
    Alert.alert('Erro', 'Número do cartão inválido. Por favor, insira um número válido.');
    return;
  }

    // Validar o formato da data de validade (adicionar sua lógica de validação aqui)
    const regexDataValidade = /^(0[1-9]|1[0-2])\/[0-9]{2}$/; // Verifica se está no formato MM/AA
    if (!regexDataValidade.test(dataValidade)) {
      Alert.alert('Erro', 'Data de validade inválida. Por favor, insira uma data válida no formato MM/AA.');
      return;
    }

    // Adicionar o cartão se todos os campos forem válidos
    const novoCartao = {
      numero: numeroCartao,
      nomeTitular,
      dataValidade,
      cvc,
    };
    setCartoes([...cartoes, novoCartao]);
    setModalVisible(false);
    setNumeroCartao('');
    setNomeTitular('');
    setDataValidade('');
    setCvc('');
    setCartaoCadastrado(true);
  };

  const removerCartao = (index) => {
    const novosCartoes = [...cartoes];
    novosCartoes.splice(index, 1);
    setCartoes(novosCartoes);
    if (novosCartoes.length === 0) {
      setCartaoCadastrado(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Image source={require('./imagebg.png')} style={styles.backgroundImage} />
      <TouchableOpacity onPress={() => handle(false)} style={{ position: 'absolute', top: 20, left: 20 }}>
        <View style={{ backgroundColor: 'red', borderRadius: 50, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="arrow-left" size={20} color="white" />
        </View>
      </TouchableOpacity>
      {!cartaoCadastrado && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <AntDesign name="frown" size={64} color="white" />
          <Text style={styles.textocartao}>Você não possui cartão cadastrado</Text>
        </View>
      )}
      {cartaoCadastrado && cartoes.length > 0 && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Seus cartões cadastrados:</Text>
          {cartoes.map((cartao, index) => (
            <View key={index}>
              <Text>Número: {cartao.numero}</Text>
              <Text>Titular: {cartao.nomeTitular}</Text>
              <Text>Validade: {cartao.dataValidade}</Text>
              <Text>CVC: {cartao.cvc}</Text>
              <Button title="Remover Cartão" onPress={() => removerCartao(index)} />
            </View>
          ))}
        </View>
      )}
      <TouchableOpacity style={styles.botaoadicionar} onPress={() => setModalVisible(true)}>
        <Text style={{ color: 'white', fontSize: 18 }}>Adicionar Cartão</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
            <TextInput
              style={{ borderBottomWidth: 1, marginBottom: 10 }}
              placeholder="Número do Cartão"
              value={numeroCartao}
              onChangeText={(text) => setNumeroCartao(text)}
            />
            <TextInput
              style={{ borderBottomWidth: 1, marginBottom: 10 }}
              placeholder="Nome do Titular"
              value={nomeTitular}
              onChangeText={(text) => setNomeTitular(text)}
            />
            <TextInput
              style={{ borderBottomWidth: 1, marginBottom: 10 }}
              placeholder="Data de Validade (MM/AA)"
              value={dataValidade}
              onChangeText={(text) => setDataValidade(text)}
            />
            <TextInput
              style={{ borderBottomWidth: 1, marginBottom: 20 }}
              placeholder="CVC"
              value={cvc}
              onChangeText={(text) => setCvc(text)}
            />
            <Button title="Adicionar" onPress={adicionarCartao} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  textocartao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 18
  },
  botaoadicionar: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'red',
  }
})

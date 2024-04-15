import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Modal, TextInput, StyleSheet, Image, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    const loadCartoes = async () => {
      try {
        const cartoesData = await AsyncStorage.getItem('cartoes');
        if (cartoesData) {
          setCartoes(JSON.parse(cartoesData));
          setCartaoCadastrado(true);
        }
      } catch (error) {
        console.error('Erro ao carregar os cartões:', error);
      }
    };
  
    loadCartoes();
  }, []);

  const adicionarCartao = () => {
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
    const novosCartoes = [...cartoes, novoCartao];
    setCartoes(novosCartoes);
    AsyncStorage.setItem('cartoes', JSON.stringify(novosCartoes))
      .then(() => {
        setModalVisible(false);
        setNumeroCartao('');
        setNomeTitular('');
        setDataValidade('');
        setCvc('');
        setCartaoCadastrado(true);
      })
      .catch((error) => {
        console.error('Erro ao adicionar o cartão:', error);
      });
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
    <View style={styles.container}>
      <Image source={require('./imagebg.png')} style={styles.backgroundImage} />
      <TouchableOpacity onPress={() => handle(false)} style={styles.backButton}>
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
      {!cartaoCadastrado && (
        <View style={styles.noCardContainer}>
          <AntDesign name="frowno" size={64} color="white" />
          <Text style={styles.noCardText}>Você não possui cartão cadastrado</Text>
        </View>
      )}
      {cartaoCadastrado && cartoes.length > 0 && (
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.cardContainer}>
            <Text style={styles.cardHeader}>Seus cartões cadastrados:</Text>
            {cartoes.map((cartao, index) => (
              <View style={styles.card} key={index}>
                <Text style={styles.cardText}>Número: {cartao.numero}</Text>
                <Text style={styles.cardText}>Titular: {cartao.nomeTitular}</Text>
                <Text style={styles.cardText}>Validade: {cartao.dataValidade}</Text>
                <Text style={styles.cardText}>CVC: {cartao.cvc}</Text>
                <TouchableOpacity style={styles.removeButton} onPress={() => removerCartao(index)}>
                  <Text style={styles.removeButtonText}>Remover Cartão</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>Adicionar Cartão</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Número do Cartão"
              value={numeroCartao}
              onChangeText={(text) => setNumeroCartao(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Nome do Titular"
              value={nomeTitular}
              onChangeText={(text) => setNomeTitular(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Data de Validade (MM/AA)"
              value={dataValidade}
              onChangeText={(text) => setDataValidade(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="CVC"
              value={cvc}
              onChangeText={(text) => setCvc(text)}
            />
            <Button color= "red" title="Adicionar" onPress={adicionarCartao} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  noCardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noCardText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
  },
  cardContainer: {
    marginTop: 50,
  },
  cardHeader: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    color: 'black',
    fontSize: 16,
    marginBottom: 5,
  },
  removeButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  removeButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});

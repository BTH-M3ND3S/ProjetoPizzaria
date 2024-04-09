import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Função simulada para recuperar histórico da API
const recuperarHistoricoAPI = async () => {
  // Simular recuperação do histórico da API
  return [];
};

const MENSAGENS = {
  'Olá': [
    'Como posso te ajudar?',
    'Sobre o produto',
    'Fale com um atendente',
    'Notícias',
    'Suporte',
    'Compras',
    'Conta',
    'Entretenimento',
  ],
  'Como posso te ajudar?': [
    'Problemas com o login',
    'Dúvidas sobre o produto',
    'Problemas com o pagamento',
    'Outras dúvidas',
  ],
  'Problemas com o login': [
    '1. Verifique se o seu email e senha estão corretos.',
    '2. Se você esqueceu sua senha, clique em "Esqueci minha senha".',
    '3. Se o problema persistir, entre em contato com o suporte.',
  ],
  'Dúvidas sobre o produto': [
    '1. Consulte a seção de perguntas frequentes no site.',
    '2. Entre em contato com o suporte para obter ajuda personalizada.',
  ],
  'Problemas com o pagamento': [
    '1. Verifique se os dados do seu cartão estão corretos.',
    '2. Tente usar outro método de pagamento.',
    '3. Entre em contato com o suporte se o problema persistir.',
  ],
  'Outras dúvidas': [
    '1. Consulte a documentação ou manuais do produto.',
    '2. Procure por respostas em fóruns online relacionados.',
  ],
};

export default function Conversas({ handle }) {
  const [mensagensStack, setMensagensStack] = useState(['Olá']);
  const [historicoMensagens, setHistoricoMensagens] = useState([]);

  useEffect(() => {
    // Carregar histórico de conversas
    const recuperarHistorico = async () => {
      // Simular recuperação do histórico da API
      const historico = await recuperarHistoricoAPI();
      setHistoricoMensagens(historico);
    };

    recuperarHistorico();
  }, []);

  const handleResposta = (resposta) => {
    setMensagensStack([...mensagensStack, resposta]);

    // Salvar mensagem no histórico
    const novaMensagem = {
      remetente: 'Bot',
      texto: resposta,
    };
    setHistoricoMensagens([...historicoMensagens, novaMensagem]);
  };

  return (

    <View style={styles.container}>
      <Image source={require('./imagebg.png')} style={styles.backgroundImage}/>
      <TouchableOpacity onPress={() => handle(false)} style={{  top: 20, left: 20 }}>
        <View style={{ backgroundColor: 'red', borderRadius: 50, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="arrow-left" size={20} color="white" />
        </View>
      </TouchableOpacity>
      <FlatList
        style={styles.mensagens}
        data={historicoMensagens}
        renderItem={({ item }) => (
          <View style={[styles.mensagem, item.remetente === 'Bot' ? styles.remetenteBot : styles.remetenteUsuario]}>
            <Text>{item.texto}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        inverted
      />
      <View style={styles.opcaoContainer}>
        {MENSAGENS[mensagensStack[mensagensStack.length - 1]].map((opcao, index) => (
          <TouchableOpacity
            key={index}
            style={styles.opcaoBotao}
            onPress={() => {
              if (opcao.match(/^\d+\./)) return;
              handleResposta(opcao);
            }}
          >
            <Text style={{ color: "white" }}>{opcao}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  mensagens: {
    flex: 1,
  },
  mensagem: {
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
  },
  remetenteBot: {
    backgroundColor: '#e0e0e0',
    alignSelf: 'flex-start',
  },
  remetenteUsuario: {
    backgroundColor: 'red',
    alignSelf: 'flex-end',
  },
  opcaoContainer: {
    marginBottom: 10,
  },
  opcaoBotao: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

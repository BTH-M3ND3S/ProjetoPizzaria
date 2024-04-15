import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Switch, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Linking } from 'react-native';

export default function Configuracoes({ handle }) {
  const [notificacoes, setNotificacoes] = useState(false);
  const [sons, setSons] = useState(false);
  const [vibracao, setVibracao] = useState(false);
  const [notificacoesPush, setNotificacoesPush] = useState(false);
  const [modoEconomiaDados, setModoEconomiaDados] = useState(false);

  const toggleNotificacoes = () => setNotificacoes(previousState => !previousState);
  const toggleSons = () => setSons(previousState => !previousState);
  const toggleVibracao = () => setVibracao(previousState => !previousState);
  const toggleNotificacoesPush = () => setNotificacoesPush(previousState => !previousState);
  const toggleModoEconomiaDados = () => setModoEconomiaDados(previousState => !previousState);

  const handleConta = () => {
    // Simulação: Navegar para a tela de edição de conta
    console.log('Navegar para a tela de edição de conta');
  };

  const handleBackup = () => {
    // Simulação: Configurar o backup
    console.log('Configurar o backup');
  };

  const handleLocalizacao = () => {
    // Simulação: Configurar a localização
    console.log('Configurar a localização');
  };

  const handleSuporte = () => {
    // Simulação: Abrir um link para suporte
    Linking.openURL('https://exemplo.com/suporte');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./imagebg.png')} style={styles.backgroundImage} />
      <TouchableOpacity onPress={() => handle(false)} style={{ position: 'absolute', top: 20, left: 20 }}>
        <View style={{ backgroundColor: 'red', borderRadius: 50, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="arrow-left" size={20} color="white" />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>Configurações</Text>

      <TouchableOpacity style={styles.configItem} onPress={toggleNotificacoes}>
        <Text>Notificações</Text>
        <Switch value={notificacoes} onValueChange={toggleNotificacoes} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.configItem} onPress={toggleSons}>
        <Text>Sons</Text>
        <Switch value={sons} onValueChange={toggleSons} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.configItem} onPress={toggleVibracao}>
        <Text>Vibração</Text>
        <Switch value={vibracao} onValueChange={toggleVibracao} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.configItem} onPress={toggleNotificacoesPush}>
        <Text>Notificações por Push</Text>
        <Switch value={notificacoesPush} onValueChange={toggleNotificacoesPush} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.configItem} onPress={toggleModoEconomiaDados}>
        <Text>Modo Economia de Dados</Text>
        <Switch value={modoEconomiaDados} onValueChange={toggleModoEconomiaDados} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.configItem} onPress={handleConta}>
        <Text>Conta</Text>
        <Text>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.configItem} onPress={handleBackup}>
        <Text>Backup</Text>
        <Text>Configurar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.configItem} onPress={handleLocalizacao}>
        <Text>Localização</Text>
        <Text>Configurar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.configItem} onPress={handleSuporte}>
        <Text>Ajuda</Text>
        <Text>Suporte</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  configItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    elevation: 2,
    height: 70
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

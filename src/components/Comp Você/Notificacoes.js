import React, { useState } from 'react';
import { View, Text, Button, Switch, StyleSheet, Animated, Dimensions, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

export default function Notificacoes({ handle }) {
  const [notificacoesAtivadas, setNotificacoesAtivadas] = useState(false);
  const [vibracaoAtivada, setVibracaoAtivada] = useState(false);
  const [somAtivado, setSomAtivado] = useState(false);
  const [alerta, setAlerta] = useState(null);
  const [alertaPosition] = useState(new Animated.Value(0)); // Inicializando posição do alerta

  const showAlert = (message) => {
    setAlerta(message);
    Animated.timing(alertaPosition, {
      toValue: 1, // Posição de exibição do alerta (1 = totalmente visível)
      duration: 300, // Duração da animação em milissegundos
      useNativeDriver: true,
    }).start(() => {
      // Após o alerta ser totalmente visível, esconde ele novamente
      Animated.timing(alertaPosition, {
        toValue: 0, // Posição de ocultação do alerta (0 = totalmente oculto)
        duration: 1500, // Duração da animação em milissegundos
        delay: 1500, // Tempo de espera antes de começar a ocultação
        useNativeDriver: true,
      }).start(() => {
        setAlerta(null); // Resetando o estado do alerta
      });
    });
  };

  const handleNotificacoesToggle = () => {
    setNotificacoesAtivadas((prevState) => !prevState);
    if (!notificacoesAtivadas) {
      showAlert('Notificações ativadas!');
    } else {
      showAlert('Notificações desativadas!');
    }
  };

  const handleVibracaoToggle = () => {
    setVibracaoAtivada((prevState) => !prevState);
    if (!vibracaoAtivada) {
      showAlert('Vibração ativada!');
    } else {
      showAlert('Vibração desativada!');
    }
  };

  const handleSomToggle = () => {
    setSomAtivado((prevState) => !prevState);
    if (!somAtivado) {
      showAlert('Som ativado!');
    } else {
      showAlert('Som desativado!');
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
      <View style={styles.container}>

        <Text style={styles.title}>Configurações de Notificações</Text>
        <View style={styles.option}>
          <Text style={styles.optionText}>Ativar Notificações</Text>
          <Switch value={notificacoesAtivadas} onValueChange={handleNotificacoesToggle} />
        </View>
        {notificacoesAtivadas && (
          <View style={styles.option}>
            <Text style={styles.optionText}>Vibração</Text>
            <Switch value={vibracaoAtivada} onValueChange={handleVibracaoToggle} />
          </View>
        )}
        {notificacoesAtivadas && (
          <View style={styles.option}>
            <Text style={styles.optionText}>Som</Text>
            <Switch value={somAtivado} onValueChange={handleSomToggle} />
          </View>
        )}
     
      </View>
      {alerta && (
        <Animated.View style={[styles.alertContainer, { opacity: alertaPosition }]}>
          <Text style={styles.alertText}>{alerta}</Text>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    position: "absolute"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "white"
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionText: {
    color: "white",
    marginRight: 10
  },
  alertContainer: {
    position: 'absolute',
    bottom: 20,
    left: (width - 200) / 2,
    width: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertText: {
    color: '#fff',
  },
});

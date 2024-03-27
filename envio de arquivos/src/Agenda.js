import React, { useEffect, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, StyleSheet, FlatList, Keyboard, Platform } from 'react-native'
import uuid from 'react-native-uuid'
import Lista from './Lista'
import { useBatteryLevel } from 'expo-battery';
import * as Calendar from 'expo-calendar'

export default  function Agenda() {
  const [eventoEditando, setEventoEditando] = useState(null);
  const [agenda,setAgenda] = useState("");
  const [inicio,setInicio] = useState("");
  const [final,setFinal] = useState("");
  const [dados, setDados] = useState([]);

  async function getPermissions(){
    const{ status } = await Calendar.requestCalendarPermissionsAsync();
    if(status === 'granted'){
      const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT)
    }
  }
  useEffect(() => {
    getPermissions();
  }, [])





  async function Salvar() {
    if (inicio !== '' && agenda !== '' && final !== '') {
      if (eventoEditando) {
        const eventosAtualizados = dados.map((evento) =>
          evento.id === eventoEditando.id ? { ...eventoEditando, nome: agenda, inicio, final } : evento
        );
        setDados(eventosAtualizados);
        setEventoEditando(null);
      } else {
        const evento = {
          id: uuid.v4(),
          nome: agenda,
          inicio,
          final,
        };
        const novoEvento = [...dados, evento];
        setDados(novoEvento);
      }

      setAgenda('');
      setInicio('');
      setFinal('');
      setEventoEditando(null);
      Keyboard.dismiss();



      const defaultCalendarSource =
      Platform.OS === 'ios'
      ? await Calendar.getDefaultCalendarAsync()
      : {isLocalAccount: true, name: 'Expo Calendar'};
      const newCalendarID = await Calendar.createCalendarAsync({
        title: 'Expo Calendar',
        color: 'blue',
        entityType: Calendar.EntityTypes.EVENT,
        sourceId: defaultCalendarSource.id,
        source: defaultCalendarSource,
        name: 'internalCalendarName',
        ownerAccount: 'personal',
        accessLevel: Calendar.CalendarAccessLevel.OWNER,
      });

      let inicioDataHora = inicio.split(" ");
      let inicioData = inicioDataHora[0].split("/");
      let inicioHora = inicioDataHora[1].split(".");

      let finalDataHora = final.split(" ");
      let finalData = finalDataHora[0].split("/");
      let finalHora = finalDataHora[1].split(".");

      const newEvent = {
        title: agenda,
        startDate: new Date(inicioData[2], inicioData[1] -1, inicioData[0], inicioHora[0], inicioHora[1]),
        endDate: new Date(finalData[2], finalData[1] -1, finalData[0], finalHora[0], finalHora[1]),
        location: 'Sesi',
        notes: 'Meteoro da Paixão'
      };
      try {
        await Calendar.createEventAsync(newCalendarID, newEvent);
        alert('Evento Criado com sucesso!');
      } catch (error){
        alert("Erro ao criar Evento!")
      }

    }
  }
  function Limpar(){
    setDados([])
  }
  function excluirEvento(id) {
    const eventosAtualizados = dados.filter((evento) => evento.id !== id);
    setDados(eventosAtualizados);
  }
  function editarEvento(evento) {
    setAgenda(evento.nome);
    setInicio(evento.inicio);
    setFinal(evento.final);
    setEventoEditando(evento);
  }
  return (
    <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder='Nome do Evento'
        value={agenda}
        onChangeText={(digitado) => setAgenda(digitado)}
      />
      <TextInput
        style={styles.input}
        placeholder='Data de Início'
        value={inicio}
        keyboardType='numeric'
        onChangeText={(digitado) => setInicio(digitado)}
      />
      <TextInput
        style={styles.input}
        placeholder='Data de Término'
        value={final}
        keyboardType='numeric'
        onChangeText={(digitado) => setFinal(digitado)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={Salvar}
      >
        <Text style={styles.buttonText}>SALVAR</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={Limpar}
      >
        <Text style={styles.buttonText} >LIMPAR</Text>
      </TouchableOpacity>
    </View>
    <FlatList
    data={dados} 
    renderItem={({item}) => <Lista id={item.id} nome={item.nome} inicio={item.inicio} final={item.final} onExcluir={excluirEvento} onEditar={editarEvento} /> }
     keyExtractor={item => item.id}/>
  </View>
  )
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
  }
});


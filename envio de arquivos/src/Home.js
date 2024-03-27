import React, { useState, useEffect, useContext } from 'react'
import { View, StyleSheet, Switch, Text } from 'react-native'
import { useBatteryLevel } from 'expo-battery';
import * as Network from 'expo-network';
import {UserContext} from './Context/UserContext';


function Home( {navigation}) {

  const [ativado, setAtivado] = useState(false);
  const [cor, setCor] = useState("white");
  const [bateria, setBateria] = useState();
  const BatteryLevel = useBatteryLevel();
  const [rede, setRede] = useState();

  const {usuario} = useContext(UserContext)

  async function getStatus(){
    const status = await Network.getNetworkStateAsync();
    if(status.type == "WIFI"){
      setRede(true)
    }
  }
  useEffect( () => {
    getStatus();
}, [])

  useEffect( () => {
        getStatus();
  }, [rede])

  useEffect(() => {
      Network.getNetworkStateAsync
      setBateria((BatteryLevel * 100).toFixed(0))
  }, [BatteryLevel])



  function CliqueSwitch(){
    setAtivado(!ativado);
    if(!ativado){
      setCor('black')
    } else{
      setCor('white')
    }
  }

  return (
    
    <View style={[css.Container, {backgroundColor: cor}]}>
      <Text>Bem Vindo: {usuario}</Text>
      {bateria > 20 ?
    <Switch
        trackColor={{false: '#767577', true: '#767577'}}
        thumbColor={ativado ? 'blue' : 'gray'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={CliqueSwitch}
        value={ativado}
      />
      : <Text>{bateria}</Text>
      }
      {rede ? <Text>Conectado ao Wifi</Text> : <Text>Conecte ao wifi</Text>}
      </View>

  )

  
}
const css = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Home
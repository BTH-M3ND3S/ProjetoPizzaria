//---------------------IMPORTS PRINCIPAIS-----------------------------\\
import React, { useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native'; 
//---------------------IMPORTS PAGINAS-----------------------------\\
import Home from '../pages/Home';
import Cardapio from '../pages/Cardapio';
import Pedidos from '../pages/Pedidos';
import Voce from '../pages/Voce';

import AdicionarSaldo from '../components/Comp Home/AdicionarSaldo';
import AdicionarPedido from '../components/Comp Home/AdicionarPedido';
import Cupons from '../components/Comp Home/Cupons';
import { UserContext } from '../Context/UserContext';
import Login from '../pages/Login';


//---------------------CONST TABNAVIGATOR-----------------------------\\
const Tab = createBottomTabNavigator();

//---------------------MENU MAIS-----------------------------\\
const Menu = ({ showMenu }) => {
  if (!showMenu) return null;
  
  const [adicionarsaldo, setAdicionarSaldo] = useState(false);
  const [adicionarpedido, setAdicionarPedido] = useState(false);
  const [cupons, setCupons] = useState(false);


  //-------------COMPONENTES---------------------
    if (adicionarsaldo === true) {
      return(
        <AdicionarSaldo handle={ setAdicionarSaldo }/>
      ) 
    }
    function exibiradicionarsaldo() {
      setAdicionarSaldo(true)
    }
  //-------------------------------------------------\\
    if (adicionarpedido === true) {
      return(
        <AdicionarPedido handle={ setAdicionarPedido }/>
      ) 
    }
    function exibiradicionarpedido() {
      setAdicionarPedido(true)
    }

    if (cupons === true) {
      return(
        <Cupons handle={ setCupons }/>
      ) 
    }
    function exibirCupons() {
      setCupons(true)
    }

  return (
    <View style={{ position: 'absolute', bottom: 60, width: '100%', alignItems: 'center' }}>
      <View style={{ alignItems: "center" ,backgroundColor: 'white', height: 100, justifyContent: 'space-around',borderTopLeftRadius: 100,borderTopRightRadius: 100,  padding: 10, width: "100%", display:"flex", flexDirection: "row" }}>
        <TouchableOpacity style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} onPress={exibirCupons}>
          <MaterialCommunityIcons name="sale" size={24} color="black" />
          <Text>Cupons</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} onPress={exibiradicionarsaldo}>
          <AntDesign name="pluscircleo" size={24} color="black" />
          <Text>Saldo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} onPress={exibiradicionarpedido}>
          <FontAwesome5 name="clipboard-list" size={24} color="black" />
          <Text>Pedidos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
//---------------------BOTAO MENU MAIS-----------------------------\\
const MenuButton = ({ setShowMenu }) => (
  <TouchableOpacity style={{ width: 50, height: 50, backgroundColor: "red", padding: 15, borderRadius: 100, marginRight: 10, marginLeft: 10, marginTop: 3 }} onPress={ (e) => {
    e.preventDefault();
    setShowMenu( current => !current );
  }}>
    <Ionicons name="add" size={18} color="yellow"/>
  </TouchableOpacity>
);
//---------------------MENU NAVIGATOR-----------------------------\\
export default function Rotas (){

  const{logado } = useContext( UserContext );
  const [showMenu, setShowMenu] = useState(false);

  if( logado == false ) {
  //  return(  <Login /> )
  }

  const ButtonScreen = () => null;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Cardápio') {
              iconName = focused ? 'restaurant' : 'restaurant-outline'; 
            } else if (route.name === 'Pedidos') {
              iconName = focused ? 'clipboard' : 'clipboard-outline';
            } else if (route.name === 'Você') {
              iconName = focused ? 'person' : 'person-outline';
            }
            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red', 
          tabBarInactiveTintColor: 'black', 
          tabBarShowLabel: true, 
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarStyle: {
            backgroundColor: 'white',
            height: 55,
          },
          headerShown: false,
          
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cardápio" component={Cardapio} />
        <Tab.Screen name=" "  
          options={({navigation})=> ({
           tabBarButton:props => <MenuButton setShowMenu={setShowMenu} />
          })}
          component={ButtonScreen}
        />
        <Tab.Screen name="Pedidos" component={Pedidos} />
        <Tab.Screen name="Você" component={Voce} />
       
      </Tab.Navigator>
      {/*
      <MenuButton onPress={() => setShowMenu(!showMenu)} />
        */}
      <Menu showMenu={showMenu} />
  
    </NavigationContainer>
  );
};

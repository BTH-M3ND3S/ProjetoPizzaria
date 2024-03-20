import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native'; 


import Home from './src/pages/Home';
import Cardapio from './src/pages/Cardapio';
import Pedidos from './src/pages/Pedidos';
import Voce from './src/pages/Voce';
import Favoritos from './src/pages/Favoritos'; 

const Tab = createBottomTabNavigator();


const Menu = ({ showMenu }) => {
  if (!showMenu) return null;

  return (
    <View style={{ position: 'absolute', bottom: 55, width: '100%', alignItems: 'center' }}>
      <View style={{ alignItems: "center" ,backgroundColor: 'white', height: 100, justifyContent: 'space-around',borderTopLeftRadius: 100,borderTopRightRadius: 100,  padding: 10, width: "97%", display:"flex", flexDirection: "row" }}>
        <TouchableOpacity style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <MaterialCommunityIcons name="sale" size={24} color="black" />
          <Text>Cupons</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <AntDesign name="pluscircleo" size={24} color="black" />
          <Text>Saldo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <FontAwesome5 name="clipboard-list" size={24} color="black" />
          <Text>Pedidos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const MenuButton = ({ onPress }) => (
  <TouchableOpacity style={{ position: 'absolute', bottom:0, left: '50%', transform: [{ translateX: -25 }], zIndex: 1, backgroundColor: "red", padding: 15, borderRadius: 100 }} onPress={onPress}>
    <Ionicons name="add" size={18} color="yellow"/>
  </TouchableOpacity>
);

export default function App (){
  const [showMenu, setShowMenu] = useState(false);

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
          },
          
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Tab.Screen name="Cardápio" component={Cardapio} options={{ headerShown: false }}/>
        <Tab.Screen name="Pedidos" component={Pedidos} options={{ headerShown: false }}/>
        <Tab.Screen name="Você" component={Voce} options={{ headerShown: false }}/>
        <Tab.Screen name="Favoritos" component={Favoritos} options={{ headerShown: false }}/>
       
      </Tab.Navigator>
      <MenuButton onPress={() => setShowMenu(!showMenu)} />
      <Menu showMenu={showMenu} />
    </NavigationContainer>
  );
};

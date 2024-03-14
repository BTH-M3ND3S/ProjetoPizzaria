import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import { View, Text, TouchableOpacity } from 'react-native'; 

import Home from './src/pages/Home';
import Cardapio from './src/pages/Cardapio';
import Pedidos from './src/pages/Pedidos';
import Voce from './src/pages/Voce';

const Tab = createBottomTabNavigator();

// Componente de Menu
const Menu = ({ showMenu }) => {
  if (!showMenu) return null;

  return (
    <View style={{ position: 'absolute', bottom: 80, width: '100%', alignItems: 'center' }}>
      <View style={{ backgroundColor: 'white', borderRadius: 5, padding: 10 }}>
        <Text>Opção 1</Text>
        <Text>Opção 2</Text>
        <Text>Opção 3</Text>
      </View>
    </View>
  );
}

// Componente MenuButton
const MenuButton = ({ onPress }) => (
  <TouchableOpacity style={{ position: 'absolute', bottom: 20, left: '50%', transform: [{ translateX: -25 }], zIndex: 1 }} onPress={onPress}>
    <Ionicons name="add" size={24} color="black" />
  </TouchableOpacity>
);

export default function App (){
  const [showMenu, setShowMenu] = useState(false);

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Cardápio') {
                iconName = focused ? 'list' : 'list-outline';
              } else if (route.name === 'Pedidos') {
                iconName = focused ? 'cart' : 'cart-outline';
              } else if (route.name === 'Você') {
                iconName = focused ? 'person' : 'person-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'black',
            showLabel: true,
            labelStyle: {
              fontSize: 12,
            },
            style: {
              backgroundColor: 'white',
            },
          }}
        >
          <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Tab.Screen name="Cardápio" component={Cardapio} options={{ headerShown: false }}/>
          <Tab.Screen name="Pedidos" component={Pedidos} options={{ headerShown: false }}/>
          <Tab.Screen name="Você" component={Voce} options={{ headerShown: false }}/>
        </Tab.Navigator>
        <MenuButton onPress={() => setShowMenu(!showMenu)} />
        <Menu showMenu={showMenu} />
      </View>
    </NavigationContainer>
  );
};

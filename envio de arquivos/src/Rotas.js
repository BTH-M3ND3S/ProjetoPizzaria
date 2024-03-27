import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from './Context/UserContext';

import UserProvider from './Context/UserContext';


import Home from './Home';
import Agenda from './Agenda';
import Itens from './Itens';
import Contatos from './Contatos';
import Local from './Local';
import Camera from './TelaCamera';
import Login from './Login';

const Tab = createBottomTabNavigator()

export default function Rotas() {
    
    const { logado } = useContext(UserContext);

    if (logado == false) {
        return (
            <Login />
        )
    }
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Agenda" component={Agenda} />
                <Tab.Screen name="Itens" component={Itens} />
                <Tab.Screen name="Contatos" component={Contatos} />
                <Tab.Screen name="Local" component={Local} />
                <Tab.Screen name="Camera" component={Camera} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
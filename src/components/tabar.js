import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const CustomTabBar = ({ state, descriptors, navigation }) => {
 const route = useRoute();

 return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'white' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity onPress={onPress} style={{ padding: 10 }} key={index}>
            {route.name !== 'Favoritos' && (
              <Text style={{ color: isFocused ? 'red' : 'black' }}>
                {label}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
 );
};
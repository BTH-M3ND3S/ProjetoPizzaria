import React, { useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserProvider from '../../Context/UserContext';

const { width, height } = Dimensions.get('window');



 




const menus = [
  {
    category: 'Pizzas',
    items: [
      { name: 'Mussarela', price: 15.99 },
      { name: 'Calabresa', price: 18.99 },
      { name: 'Peperoni', price: 17.99 },
      { name: 'Margherita', price: 16.99 },
      { name: 'Frango com Catupiry', price: 19.99 },
    ],
  },
  {
    category: 'Bebidas',
    items: [
      { name: 'Refrigerante', price: 5.99 },
      { name: 'Suco Natural', price: 7.99 },
      { name: 'Água Mineral', price: 3.99 },
    ],
  },
  
];

export default function AdicionarPedido({ handle}) {
  const [cartoes, setCartoes] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('cartoes').then((value) => {
      if (value) {
        setCartoes(JSON.parse(value));
      }
    });
  }, []);

  const {saldo} = useContext(UserProvider)
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddToCart = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

  const handleRemoveFromCart = (index) => {
    setSelectedItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.splice(index, 1);
      return newItems;
    });
  };

  const renderMenuItem = ({ item, index }) => (
    <View style={styles.menuItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleAddToCart(item)}>
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
        {selectedItems.some((i) => i === item) && (
          <TouchableOpacity onPress={() => handleRemoveFromCart(index)}>
            <Text style={styles.removeButton}>-</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const renderMenuCategory = ({ item }) => (
    <View style={styles.menuCategory}>
      <Text style={styles.categoryName}>{item.category}</Text>
      <FlatList
        data={item.items}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );

  const calculateTotal = () =>
    selectedItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../Comp Você/imagebg.png')} style={styles.backgroundImage} />
      <View style={styles.content}>
        <FlatList
          data={menus}
          renderItem={renderMenuCategory}
          keyExtractor={(item) => item.category}
        />
        {selectedItems.length > 0 && (
          <View style={styles.cart}>
            <Text style={styles.cartTitle}>Seu Pedido:</Text>
            <FlatList
  data={selectedItems}
  renderItem={({ item }) => (
    <View style={styles.cartItem} key={selectedItems.indexOf(item)}>
      <Text style={styles.cartItemName}>{item.name}</Text>
      <Text style={styles.cartItemPrice}>R$ {item.price.toFixed(2)}</Text>
    </View>
  )}
  keyExtractor={(item, index) => index.toString()} 
/>
            <Text style={styles.cartTotal}>Total: R$ {calculateTotal().toFixed(2)}</Text>
            <Button title="Finalizar Pedido" />
          </View>
        )}
      </View>
      <TouchableOpacity onPress={() => handle(false)} style={{ position: 'absolute', top: 20, left: 20 }}>
        <View style={{ backgroundColor: 'red', borderRadius: 50, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="arrow-left" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    width: '100%',
    height: '100%', 
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  content: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  menuCategory: {
    marginBottom: 20,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  itemName: {
    fontSize: 16,
    color: 'white',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
  },
  removeButton: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
  },
  cart: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#fff',
    paddingTop: 10,
  },
  cartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  cartItemName: {
    fontSize: 16,
    color: 'white',
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  cartTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 10,
    color: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

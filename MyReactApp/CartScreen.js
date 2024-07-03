import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cart = await AsyncStorage.getItem('cart');
        if (cart) {
          const items = JSON.parse(cart);
          setCartItems(items);
          calculateTotal(items);
        }
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchCartItems();
  }, []);

  const removeFromCart = async (item) => {
    try {
      const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
      setCartItems(updatedCartItems);
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCartItems));
      calculateTotal(updatedCartItems);
    } catch (error) {
      console.error(error);
    }
  };

  const calculateTotal = (items) => {
    const totalAmount = items.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);
    setTotal(totalAmount);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name.toUpperCase()}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item)}>
        <Image source={require('./assets/remove.png')} style={styles.removeButtonIcon} />
      </TouchableOpacity>
    </View>
  );

  const handleCheckout = () => {
    // Handle the checkout process
    alert('Checkout button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('./assets/Menu.png')} style={styles.menuIcon} />
        <Image source={require('./assets/Logo.png')} style={styles.logo} />
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Image source={require('./assets/Search.png')} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>CHECKOUT</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  logo: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  list: {
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemImage: {
    width: 80,
    height: 120,
    resizeMode: 'contain',
  },
  itemDetails: {
    flex: 1,
    marginLeft: 16,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#888',
    marginVertical: 4,
  },
  itemPrice: {
    fontSize: 14,
    color: '#ff69b4', // Pinkish color
  },
  removeButton: {
    padding: 8,
  },
  removeButtonIcon: {
    width: 24,
    height: 24,
    tintColor: '#ff0000',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 4,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CartScreen;

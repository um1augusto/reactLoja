// src/screens/Cart.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useCartContext } from '../contexts/CartContext';
import { useNavigation } from '@react-navigation/native';
import CartCard from '../components/CartCard';

const Cart = () => {
  const { cart, getCart } = useCartContext();
  const navigation = useNavigation<any>();

  useEffect(() => {
    getCart();
  }, []);

  console.log("Itens no carrinho:", cart);

  return (
    <View style={styles.container}>
      {cart.length > 0 ? (
        cart.map((item) => (
          <CartCard key={item.product.id} item={item} />
        ))
      ) : (
        <Text style={styles.emptyText}>Carrinho vazio</Text>
      )}

      <TouchableOpacity 
        style={styles.checkoutButton} 
        onPress={() => navigation.navigate('Payment')}
      >
        <Text style={styles.checkoutText}>Ir para Pagamento</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
  checkoutButton: {
    backgroundColor: '#3D737F',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 18,
  }
});

export default Cart;

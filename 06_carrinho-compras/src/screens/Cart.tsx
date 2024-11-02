import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useCartContext } from "../contexts/CartContext";
import CartCard from "../components/CartCard";

const Cart = () => {
  const { cart } = useCartContext();
  
  console.log("Itens no carrinho:", cart); // Log para verificar os itens no carrinho

  return (
    <View>
      {cart.map(item => (
        <CartCard key={item.product.id} item={item} />
      ))}
      {/* Se o carrinho estiver vazio, pode adicionar uma mensagem */}
      {cart.length === 0 && <Text>Carrinho vazio</Text>}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});

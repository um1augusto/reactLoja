import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ICartItem } from "../types/Product";

interface CartCardProps {
  item: ICartItem;

}

const CartCard: React.FC<CartCardProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.product.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.product.title}</Text>
        <Text>Preço: ${item.product.price}</Text>
        <Text>Quantidade: {item.quantity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  details: {
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
  },
});

export default CartCard;


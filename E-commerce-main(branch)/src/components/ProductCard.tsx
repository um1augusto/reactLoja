import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ProductDTO } from "../types/Product";
import { useCartContext } from "../contexts/CartContext";

interface ProductCardProps {
  product: ProductDTO;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addProduct } = useCartContext();

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text>Preço: ${product.price}</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {
          console.log("Botão pressionado para adicionar ao carrinho"); // Log para verificar se o botão é pressionado
          addProduct(product);
        }}>
        <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    margin: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#3D737F",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
  },
});

export default ProductCard;

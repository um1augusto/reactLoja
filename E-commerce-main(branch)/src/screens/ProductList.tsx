// src/screens/ProductList.tsx
import { StyleSheet, FlatList, View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { ProductDTO } from "../types/Product";

const ProductList = () => {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<ProductDTO[]>("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCard product={item} />}
    />
  );
};

const styles = StyleSheet.create({});

export default ProductList;

import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ICartItem, ProductDTO } from "../types/Product";
import { showError } from "../utils/Toast";

type CartContextProps = {
  cart: ICartItem[];
  getCart: () => void;
  addProduct: (product: ProductDTO) => void;
  removeProduct: (id: string) => void;
};

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext<CartContextProps>({} as CartContextProps);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<ICartItem[]>([]);

  const storeCart = async (value: ICartItem[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@cart", jsonValue);
    } catch (error) {
      showError("Não foi possível salvar o carrinho");
    }
  };

  const getCart = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@cart");
      const cartData = jsonValue !== null ? JSON.parse(jsonValue) : [];
      setCart(cartData);
      console.log("Carrinho recuperado:", cartData); // Log para verificar o carrinho recuperado
    } catch (error) {
      showError("Não foi possível recuperar o carrinho");
    }
  };

  useEffect(() => {
    getCart(); // Chama getCart ao montar o componente
  }, []);

  const addProduct = (value: ProductDTO) => {
    console.log("Adicionando produto:", value); // Log para verificar o produto sendo adicionado
    const existingProduct = cart.find(({ product }) => value.id === product.id);

    if (existingProduct) {
      const newCart = cart.map((item) =>
        item.product.id === existingProduct.product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(newCart);
      storeCart(newCart);
    } else {
      const newCart = [...cart, { product: value, quantity: 1 }];
      setCart(newCart);
      storeCart(newCart);
    }

    console.log("Carrinho atualizado:", cart); // Log para verificar o carrinho após a atualização
  };

  const removeProduct = (id: string) => {
    const newCart = cart.filter((c) => c.product.id !== id);
    setCart(newCart);
    storeCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, getCart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

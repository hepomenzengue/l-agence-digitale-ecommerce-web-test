// CartContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Types
interface Product {
  id: number;
  images: string[];
  title: string;
  price: string;
  rating: number;
  description: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
  };

  stock: number;
  returnPolicy: string;
}
type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  isInCart: (productId: number) => boolean;
};

// Initial context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Cart provider component
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const isInCart = (productId: number) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

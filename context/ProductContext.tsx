import React, { createContext, useContext, useState, useEffect } from "react";
import { ReactNode } from "react";
import { getProductsByCategory } from "../api/api";

interface Product {
  images: string[];
  title: string;
  price: string;
  slug: string;
}

type LayoutProps = {
  children: ReactNode;
};

// Interface pour le contexte
interface ProductContextType {
  products: Product[];
  loading: boolean;
  category: string;
  setCategory: (category: string) => void;
}

// Création du contexte
const ProductContext = createContext<ProductContextType>({
  products: [],
  loading: false,
  category: "",
  setCategory: (category: string) => {},
});

// Hook personnalisé pour utiliser le contexte
export const useProductContext = () => useContext(ProductContext);

// Fournisseur du contexte
export function ProductProvider({ children }: LayoutProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    setProducts([]);
    getProductsByCategory(category)
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [category]);

  // Fonction pour récupérer les produits par catégorie

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        category,
        setCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

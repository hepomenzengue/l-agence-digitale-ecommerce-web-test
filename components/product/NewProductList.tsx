import React, { useState, useEffect } from "react";
import ProducList from "./ProducList";
import { getAllProducts } from "../../api/api";

interface Product {
  images: string[];
  title: string;
  price: string;
  slug: string;
  meta: {
    createdAt: string;
  };
}

const NewProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(
          [...data.products]
            .sort(
              (a, b) =>
                new Date(b.meta.createdAt).getTime() -
                new Date(a.meta.createdAt).getTime()
            )
            .slice(0, 8)
        );
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(
          "Erreur lors de la récupération des données :",
          error.message
        );
      });
  }, []);

  return (
    <div className="bg-white mb-36 md:mb-0">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-700">
          Vos Nouveaux produits sont là
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <ProducList products={products} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default NewProductList;

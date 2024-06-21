import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";

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

const Cart = () => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const { cart, removeFromCart } = useCart();
  useEffect(() => {
    setCartProducts(cart);
  }, [cart]);

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);
  };
  if (cartProducts.length === 0) {
    <div className="flex flex-col items-center justify-center h-full py-12">
      <div className="flex items-center justify-center w-24 h-24 mb-4 text-green-600 bg-green-100 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10 20c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2 2-.895 2-2zm12-16h-2.19l-1.314-2.447c-.273-.508-.839-.806-1.414-.806h-8.164c-.576 0-1.142.298-1.414.806l-1.314 2.447h-2.19c-1.105 0-2 .895-2 2v2c0 1.105.895 2 2 2h1l.666 6.344c.011.11.011.22.031.328l.333 3.328c.046.463.452.8.921.8h14.118c.469 0 .875-.337.921-.8l.333-3.328c.02-.108.02-.218.031-.328l.666-6.344h1c1.105 0 2-.895 2-2v-2c0-1.105-.895-2-2-2zm-8 16c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2zm2-10h-8v-2h8v2z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Votre panier est vide
      </h2>
      <p className="text-gray-600 text-center max-w-xs">
        Parcourez notre collection et ajoutez des articles à votre panier pour
        voir apparaître ici.
      </p>
    </div>;
  }

  return (
    <div className="font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-white py-4">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
          <h2 className="text-2xl font-bold text-gray-800">Panier</h2>
          <hr className="border-gray-300 mt-4 mb-8" />

          <div className="space-y-4">
            {cartProducts &&
              cartProducts.map((product) => (
                <div
                  key={product.id}
                  className="grid grid-cols-3 items-center gap-4"
                >
                  <div className="col-span-2 flex items-center gap-4">
                    <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                      <Image
                        src={product.images[0]}
                        className="w-full h-full object-contain"
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-gray-800">
                        {product.title}
                      </h3>
                      <h6
                        onClick={() => handleRemoveFromCart(product.id)}
                        className="text-xs text-red-500 cursor-pointer mt-0.5"
                      >
                        Retirer
                      </h6>

                      <div className="flex gap-4 mt-4">
                        <div>
                          <button
                            type="button"
                            className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-2.5 fill-current"
                              viewBox="0 0 124 124"
                            >
                              <path
                                d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                data-original="#000000"
                              ></path>
                            </svg>

                            <span className="mx-2.5">1</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-2.5 fill-current"
                              viewBox="0 0 42 42"
                            >
                              <path
                                d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                data-original="#000000"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <h4 className="text-base font-bold text-gray-800">
                      {`${product.price} CFA`}
                    </h4>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
          <ul className="text-gray-800 mt-8 space-y-4">
            <li className="flex flex-wrap gap-4 text-base font-bold">
              Total <span className="ml-auto">$52.00</span>
            </li>
          </ul>

          <div className="mt-8 space-y-2">
            <button
              type="button"
              className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-green-700 hover:bg-green-800 text-white rounded-md"
            >
              Enregistrer le panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React, { useState, useEffect } from "react";
import Carousel from "../Carousel";
import { getProductById } from "../../api/api";

interface Product {
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

type Props = {
  productId: number;
};

function ProductOverview({ productId }: Props) {
  const [product, setProduct] = useState<Product>({
    images: [],
    title: "",
    price: "",
    rating: 0,
    description: "",
    weight: 0,
    dimensions: {
      width: 0,
      height: 0,
    },

    stock: 0,
    returnPolicy: "",
  });
  const [loading, setLoading] = useState(true);

  function roundNumber(nombre: number) {
    if (nombre % 1 < 0.5) {
      return Math.floor(nombre);
    } else {
      return Math.ceil(nombre);
    }
  }

  useEffect(() => {
    getProductById(productId)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    <div className="font-sans">
      <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
          {/* Carousel skeleton */}
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <div className="sm:space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4 animate-pulse">
              {/* Thumbnails */}
              <div className="w-full bg-gray-300 h-24 rounded-md"></div>
              <div className="w-full bg-gray-300 h-24 rounded-md"></div>
              <div className="w-full bg-gray-300 h-24 rounded-md"></div>
              <div className="w-full bg-gray-300 h-24 rounded-md"></div>
            </div>
            {/* Main image */}
            <div className="w-4/5 rounded-md object-cover bg-gray-300 h-96"></div>
          </div>

          {/* Product details skeleton */}
          <div className="animate-pulse">
            <h2 className="text-2xl font-bold text-gray-800">
              Loading title...
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-gray-800 text-xl font-bold">$12</p>
            </div>

            <div className="flex space-x-2 mt-4">
              <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
              <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
              <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
              <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
              <svg
                className="w-5 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800">Sizes</h3>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="w-10 h-10 bg-gray-300 border-2 border-transparent hover:border-green-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"></div>
                <div className="w-10 h-10 bg-gray-300 border-2 border-transparent hover:border-green-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"></div>
                <div className="w-10 h-10 bg-gray-300 border-2 border-transparent hover:border-green-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"></div>
                <div className="w-10 h-10 bg-gray-300 border-2 border-transparent hover:border-green-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"></div>
              </div>
            </div>

            <button
              type="button"
              className="w-full mt-8 px-6 py-3 bg-gray-300 hover:bg-green-700 text-white text-sm font-semibold rounded-md"
            >
              Add to cart
            </button>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800">
                About the item
              </h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                <li>Loading description...</li>
                <li>Loading description...</li>
                <li>Loading description...</li>
                <li>Loading description...</li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800">Reviews(10)</h3>
              <div className="space-y-3 mt-4">
                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">5.0</p>
                  <div className="w-5 fill-green-600 ml-1.5 bg-gray-300 rounded-full"></div>
                  <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                    <div className="h-full rounded-md bg-green-600"></div>
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">4.0</p>
                  <div className="w-5 fill-green-600 ml-1.5 bg-gray-300 rounded-full"></div>
                  <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                    <div className="h-full rounded-md bg-green-600"></div>
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">3.0</p>
                  <div className="w-5 fill-green-600 ml-1.5 bg-gray-300 rounded-full"></div>
                  <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                    <div className="h-full rounded-md bg-green-600"></div>
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">2.0</p>
                  <div className="w-5 fill-green-600 ml-1.5 bg-gray-300 rounded-full"></div>
                  <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                    <div className="h-full rounded-md bg-green-600"></div>
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">8%</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">1.0</p>
                  <div className="w-5 fill-green-600 ml-1.5 bg-gray-300 rounded-full"></div>
                  <div className="bg-gray-300 rounded-md w-full h-2 ml-3">
                    <div className="h-full rounded-md bg-green-600"></div>
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">6%</p>
                </div>
              </div>

              <button
                type="button"
                className="w-full mt-8 px-6 py-2.5 border border-green-600 bg-gray-300"
              >
                Read all reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
  return (
    <div className="font-sans mb-36 md:mb-0">
      <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
          <Carousel images={product.images} />

          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {product.title}
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-gray-800 text-xl font-bold">{`${product.price} FCFA`}</p>
            </div>

            <div className="flex space-x-2 mt-4">
              {Array(roundNumber(product.rating))
                .fill(0)
                .map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 fill-green-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
              {5 - roundNumber(product.rating) > 0 &&
                Array(5 - roundNumber(product.rating))
                  .fill(0)
                  .map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  ))}
            </div>

            <button
              type="button"
              className="w-full mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-md"
            >
              Ajouter au panier
            </button>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800">
                A propos du produit
              </h3>
              <p className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                {` ${product.description}`}
              </p>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                <li>{`Poids: ${product.weight} g`}</li>
                <li>{`Longeur: ${product.dimensions?.height} cm`}</li>
                <li>{`Largeur: ${product.dimensions?.width} cm`}</li>
                <li>{`Quantité en stock: ${product.stock}`}</li>
                <li>{`Conditions de retour: ${product.returnPolicy}`}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductOverview;

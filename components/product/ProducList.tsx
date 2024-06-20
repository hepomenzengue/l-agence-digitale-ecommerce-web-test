import Link from "next/link";
import React from "react";
import Image from "next/image";

interface Product {
  images: string[];
  title: string;
  price: string;
  slug: string;
  meta: {
    createdAt: string;
  };
}

interface ProductList {
  products: Product[];
  loading: boolean;
}
const ProducList = ({ products, loading }: ProductList) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="h-80 group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <div className="animate-pulse h-full w-full bg-gray-300" />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <h3 className="text-sm text-gray-700">
                <div className="animate-pulse bg-gray-300 h-4 w-1/2 mb-4"></div>
              </h3>
              <p className="text-lg font-medium text-gray-900">
                <div className="animate-pulse bg-gray-300 h-4 w-1/4"></div>
              </p>
            </div>
            <button className="mt-4 w-full px-6 py-2 bg-gray-300 text-gray-700 rounded-md font-semibold shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300">
              <div className="animate-pulse bg-gray-300 h-10 w-full"></div>
            </button>
          </div>
        ))}
      </div>
    );
  }
  return (
    <>
      {" "}
      {products.map((product) => (
        <Link key={product.slug} href={"#"} className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <Image
              src={product.images[0]}
              alt={product.title}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
              width={500}
              height={500}
              layout="responsive"
            />
          </div>

          <h3 className="text-sm font-medium text-gray-900 line-clamp-1 truncate">
            {product.title}
          </h3>
          <p className="text-lg font-semibold text-gray-900 mt-1">{`${product.price} CFA`}</p>

          <button className="mt-4 w-full px-6 py-2 bg-green-600 text-white rounded-md font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600">
            Consulter le produit
          </button>
        </Link>
      ))}
    </>
  );
};

export default ProducList;

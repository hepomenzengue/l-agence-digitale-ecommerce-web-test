import React from "react";
import Image from "next/image";
type ProductCardProps = {
  imageUrl: string;
  productName: string;
  price: string;
  productUrl: string;
};
function CarouselProductCartDefault({
  imageUrl,
  productName,
  price,
  productUrl,
}: ProductCardProps) {
  return (
    <div className="relative w-full h-96 md:h-72 lg:h-96 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-75"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="relative flex flex-col items-center justify-center h-full bg-gray-700 bg-opacity-60 p-4">
        <div className="text-center text-white">
          <div className="font-bold text-xl mb-2">{productName}</div>
          <p className="text-base">{price}</p>
        </div>
        <a
          href={productUrl}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transform transition duration-300 hover:translate-y-1 hover:shadow-xl"
        >
          Voir le produit
        </a>
      </div>
    </div>
  );
}

export default CarouselProductCartDefault;
// components/ProductCard.tsx

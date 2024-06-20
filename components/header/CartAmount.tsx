import React from "react";

const CartAmount = () => {
  return (
    <div className="ml-4 hidden md:flex flex-col font-bold">
      <span className="text-xs text-gray-400">Votre panier</span>
      <span>2,650,59 CFA</span>
    </div>
  );
};

export default CartAmount;

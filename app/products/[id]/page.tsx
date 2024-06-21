"use client";
import React, { useEffect } from "react";

import CategoryProductList from "../../../components/product/CatgoryProductList ";

type Props = {
  params: {
    id: string;
  };
};

const Products = ({ params }: Props) => {
  return <CategoryProductList category={params.id} />;
};

export default Products;

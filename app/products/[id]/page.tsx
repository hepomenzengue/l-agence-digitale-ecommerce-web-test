"use client";
import React, { useEffect } from "react";

import { useProductContext } from "../../../context/ProductContext";
import CategoryProductList from "../../../components/product/CatgoryProductList ";

type Props = {
  params: {
    id: string;
  };
};

const Products = ({ params }: Props) => {
  const { setCategory } = useProductContext();
  useEffect(() => {
    setCategory(params.id);
  }, []);
  return <CategoryProductList category={params.id} />;
};

export default Products;

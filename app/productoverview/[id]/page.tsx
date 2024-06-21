"use client";
import React from "react";
import ProductOverview from "../../../components/product/ProductOverview";
type Props = {
  params: {
    id: number;
  };
};

const ProductOverviewPage = ({ params }: Props) => {
  return <ProductOverview productId={params.id} />;
};

export default ProductOverviewPage;

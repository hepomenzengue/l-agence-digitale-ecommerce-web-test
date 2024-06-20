// actions/getCategories.js
"use server";

import { getRequest } from "./utils";

export async function getCategories() {
  return getRequest("products/categories");
}
export async function getTopsCategories() {
  return getRequest("products/category/tops?select=images,title,price");
}

export async function getAllProducts() {
  return getRequest("products?select=images,title,price,meta");
}

export async function getProductsByCategory(category: string) {
  return getRequest(`products/category/${category}?select=images,title,price`);
}

// actions/getCategories.js
"use server";

import { getRequest } from "./utils";

export async function getCategories() {
  return getRequest("products/categories");
}
import axios from "axios";
import { Product } from "../types/Product";

export const fetchProducts = async (page: number, limit: number = 10) => {
  const { data } = await axios.get<Product[]>(`https://fakestoreapi.com/products?limit=${limit}&page=${page}`);
  return data;
};

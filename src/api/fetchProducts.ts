import axios from "axios";
import { Product } from "../types/Product";

export const fetchProducts = async () => {
  const { data } = await axios.get<Product[]>("https://fakestoreapi.com/products");
  return data;
};

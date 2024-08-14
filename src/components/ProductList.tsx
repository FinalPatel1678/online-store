import React from "react";
import { Grid, Typography } from "@mui/material";
import { Product } from "../types/Product";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: Product[] | undefined;
  onProductClick: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onProductClick }) => (
  <>
    <Typography variant="h4" gutterBottom>
      Product List
    </Typography>
    <Grid container spacing={2}>
      {products?.map((product) => (
        <Grid item xs={12} key={product.id}>
          <ProductItem product={product} onClick={onProductClick} />
        </Grid>
      ))}
    </Grid>
  </>
);

export default ProductList;

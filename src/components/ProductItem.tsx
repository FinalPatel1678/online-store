import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Product } from "../types/Product";

interface ProductItemProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onClick }) => (
  <Card onClick={() => onClick(product)} style={{ cursor: "pointer" }}>
    <CardContent>
      <Typography variant="h6">{product.title}</Typography>
      <Typography variant="body2">{product.description}</Typography>
    </CardContent>
  </Card>
);

export default ProductItem;

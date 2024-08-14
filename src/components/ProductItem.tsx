import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Product } from "../types/Product";

interface ProductItemProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onClick }) => (
  <Card onClick={() => onClick(product)} style={{ cursor: "pointer", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", transition: "0.3s" }}>
    <CardContent>
      <Typography variant="h6">{product.title}</Typography>
      <Typography variant="body2" style={{ color: "#555" }}>
        {product.description.length > 100 ? product.description.substring(0, 100) + "..." : product.description}
      </Typography>
    </CardContent>
  </Card>
);

export default ProductItem;

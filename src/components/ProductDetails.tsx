import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Product } from "../types/Product";

interface ProductDetailsProps {
  product: Product | null;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => (
  <>
    <Typography variant="h4" gutterBottom>
      Product Details
    </Typography>
    {product ? (
      <Card>
        <CardContent>
          <Typography variant="h5">{product.title}</Typography>
          <img src={product.image} alt={product.title} style={{ width: "100%", height: "auto" }} />
          <Typography variant="body1">{product.description}</Typography>
          <Typography variant="h6">Price: ${product.price}</Typography>
          <Typography variant="body2">Category: {product.category}</Typography>
          <Typography variant="body2">Rating: {product.rating.rate} / 5</Typography>
        </CardContent>
      </Card>
    ) : (
      <Typography>Select a product to see details</Typography>
    )}
  </>
);

export default ProductDetails;

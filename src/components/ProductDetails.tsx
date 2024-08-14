import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Product } from "../types/Product";
import "../styles/ProductDetails.css";

interface ProductDetailsProps {
  product: Product | null;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return product ? (
    <Card className="product-details-card">
      <CardContent className="product-details-content">
        <Typography variant="h5" className="product-detail-title">
          {product.title}
        </Typography>

        <div className="image-container">
          <img src={product.image} alt={product.title} className="product-image" />
        </div>

        <Typography variant="body1" className="product-description">
          {product.description}
        </Typography>

        <Typography variant="h6" className="product-price">
          Price: ${product.price}
        </Typography>

        <Typography variant="body2" className="product-category">
          Category: {product.category}
        </Typography>

        <Typography variant="body2" className="product-rating">
          Rating: {product.rating.rate} / 5 ({product.rating.count} reviews)
        </Typography>
      </CardContent>
    </Card>
  ) : (
    <Typography>Select a product to see details</Typography>
  );
};

export default ProductDetails;

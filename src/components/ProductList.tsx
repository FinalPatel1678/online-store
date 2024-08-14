import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Product } from "../types/Product";
import "../styles/ProductList.css";

interface ProductListProps {
  products: Product[] | undefined;
  onProductClick: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onProductClick }) => {
  return (
    <Grid container spacing={3}>
      {products?.map((product) => (
        <Grid item xs={12} key={product.id}>
          <Card className="product-list-card" onClick={() => onProductClick(product)} style={{ cursor: "pointer" }}>
            <CardContent>
              <Typography variant="h6" className="product-title">
                {product.title}
              </Typography>
              <Typography variant="body2" className="product-description">
                {product.description.substring(0, 100)}... {/* Shorten description */}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;

import React, { useState, useCallback } from "react";
import { useQuery } from "react-query";
import { Container, Grid, CircularProgress, Typography } from "@mui/material";
import { Product } from "./types/Product";
import { fetchProducts } from "./api/fetchProducts";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

const App: React.FC = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery("products", fetchProducts, {
    staleTime: 5 * 60 * 1000, // Cache the data for 5 minutes
    refetchOnWindowFocus: false, // Don't refetch when window is focused
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Use useCallback to memoize the click handler to prevent unnecessary re-renders
  const handleProductClick = useCallback((product: Product) => {
    setSelectedProduct(product);
  }, []);

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography>Error loading products</Typography>;

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ProductList products={products} onProductClick={handleProductClick} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProductDetails product={selectedProduct} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;

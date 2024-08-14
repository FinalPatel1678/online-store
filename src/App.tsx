import React, { useState } from "react";
import { useQuery } from "react-query";
import { Container, Grid, CircularProgress, Typography, Button, Box } from "@mui/material";
import { Product } from "./types/Product";
import { fetchProducts } from "./api/fetchProducts";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

const App: React.FC = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const { isLoading, error, refetch } = useQuery(
    ["products", page], // Key includes page for pagination
    () => fetchProducts(page, 10), // Fetch 10 products per page
    {
      keepPreviousData: true, // Keep previous data during refetch
      onSuccess: (newProducts) => {
        setProducts((prevProducts) => [...prevProducts, ...newProducts]); // Append new products to the list
      },
      refetchOnWindowFocus: false, // Prevent refetching on window focus
    }
  );

  const loadMoreProducts = () => {
    setPage((prevPage) => prevPage + 1);
    refetch();
  };

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) return <Typography>Error loading products</Typography>;

  return (
    <Container>
      <Grid container spacing={4} style={{ marginTop: "20px" }}>
        <Grid item xs={12} md={6} style={{ height: "90vh", overflowY: "auto", paddingRight: "16px" }}>
          <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
            Product List
          </Typography>
          <ProductList products={products} onProductClick={setSelectedProduct} />
          <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
            <Button variant="contained" onClick={loadMoreProducts} disabled={isLoading} style={{ marginBottom: "16px" }}>
              Load More Products
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={6} style={{ position: "sticky", top: "20px" }}>
          <div style={{ position: "sticky", top: 0, height: "auto", overflow: "hidden" }}>
            <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
              Product Details
            </Typography>
            <ProductDetails product={selectedProduct} />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;

import React, { useState } from "react";
import { useQuery } from "react-query";
import { Container, Grid, CircularProgress, Typography, Button } from "@mui/material";
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

  if (error) return <Typography>Error loading products</Typography>;

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} style={{ height: "100vh", overflowY: "scroll" }}>
          <ProductList products={products} onProductClick={setSelectedProduct} />
          {isLoading && <CircularProgress />}
          <Button variant="contained" onClick={loadMoreProducts} disabled={isLoading} style={{ marginTop: "16px" }}>
            Load More Products
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ position: "sticky", top: 0 }}>
            <ProductDetails product={selectedProduct} />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;

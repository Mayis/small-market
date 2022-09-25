import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { productsSelector, beers } from "../redux/slices/productsSlice";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function Products() {
  const products = useSelector(productsSelector);
  return (
    <Container sx={{ mt: "80px" }}>
      <Grid container spacing={2}>
        {products.map((item, i) => (
          <ProductCard
            item={item}
            key={item.id}
            initialRemain={beers[i].remain}
          />
        ))}
      </Grid>
    </Container>
  );
}

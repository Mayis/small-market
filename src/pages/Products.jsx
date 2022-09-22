import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { productsSelector, beers } from "../redux/slices/productsSlice";
import "./styles/style.css";

export default function Products() {
  const products = useSelector(productsSelector);
  return (
    <div id="products">
      {products?.map((beer, i) => (
        <ProductCard
          key={beer.id}
          item={beer}
          initialRemain={beers[i].remain}
        />
      ))}
    </div>
  );
}

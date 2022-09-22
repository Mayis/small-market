import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Busket from "./pages/Busket";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/busket" element={<Busket />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

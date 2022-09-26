import React from "react";

import Products from "./pages/Products";
import Busket from "./pages/Busket";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <Products />
      <Busket />
    </Provider>
  );
}

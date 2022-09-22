import React from "react";
import "./styles/style.css";
export default function BusketItem({ item }) {
  const { title, price, count } = item;
  const oneTotal = price * count;
  return (
    <div className="oneItem">
      <div className="nameDiv">
        <h3 className="name-h3">{title}</h3>
      </div>
      <div className="priceDiv">
        <h4 className="price-h4">
          <span className="priceSpan">price</span> {price}$
        </h4>
      </div>
      <div>
        <h4 className="total-h4">total:{oneTotal}$</h4>
      </div>
      <div className="deleteDiv">
        <h1 className="delelte-h1">X</h1>
      </div>
    </div>
  );
}

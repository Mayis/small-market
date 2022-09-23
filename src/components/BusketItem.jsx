import React from "react";
import { useDispatch } from "react-redux";
import { deleteSelectedItem } from "../redux/slices/busketSlice";
import "./styles/style.css";
export default function BusketItem({ item }) {
  const { title, price, count, id } = item;
  const oneTotal = price * count;
  const dispatch = useDispatch();
  const deleteThisItem = () => {
    dispatch(deleteSelectedItem({ id }));
  };
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
        <h4 className="total-h4">
          {count}
          {count > 1 ? " items" : " item"} total: {oneTotal}$
        </h4>
      </div>
      <div className="deleteDiv">
        <h1 className="delete-h1" onClick={deleteThisItem}>
          X
        </h1>
      </div>
    </div>
  );
}

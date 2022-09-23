import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  busketSelector,
  allItemsTotalSelector,
  buyItems,
} from "../redux/slices/busketSlice";
import BusketItem from "../components/BusketItem";
import "./styles/style.css";
export default function Busket() {
  const busket = useSelector(busketSelector);
  const allTotal = useSelector(allItemsTotalSelector);
  const dispatch = useDispatch();
  const buyAllItems = () => {
    dispatch(buyItems());
  };
  return busket.length > 0 ? (
    <>
      <div id="busket">
        {busket?.map((item) => (
          <BusketItem key={item.id} item={item} />
        ))}
      </div>
      <div className="allTotal">
        {" "}
        <span className="totalWord">ALL TOTAL</span>
        <span className="priceNum">{allTotal}$</span>
      </div>
      <div className="buyOrCancel">
        <button className="buy" onClick={buyAllItems}>
          BUY
        </button>
      </div>
    </>
  ) : (
    <div className="ifNoProduct">
      <h1>
        THERE IS NO PRODUCT IN THE BUSKET <br />
        PLEASE SELECT PRODUCT{" "}
      </h1>
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import {
  busketSelector,
  allItemsTotalSelector,
} from "../redux/slices/busketSlice";
import BusketItem from "../components/BusketItem";
import "./styles/style.css";
export default function Busket() {
  const busket = useSelector(busketSelector);
  const allTotal = useSelector(allItemsTotalSelector);
  console.log(allTotal);
  return (
    <>
      <div id="busket">
        {busket?.map((item) => (
          <BusketItem key={item.id} item={item} />
        ))}
      </div>
      <div className="AllTotal">all TOTAL{allTotal}</div>
    </>
  );
}

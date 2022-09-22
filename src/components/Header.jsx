import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/style.css";
export default function Header() {
  return (
    <div id="header">
      <NavLink
        to="products"
        className={({ isActive }) => (isActive ? "active-a" : undefined)}
      >
        HOME
      </NavLink>
      <NavLink
        to="busket"
        className={({ isActive }) => (isActive ? "active-a" : undefined)}
      >
        BUSKET
      </NavLink>
    </div>
  );
}

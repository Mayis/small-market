import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { busketLength } from "../redux/slices/busketSlice";
export default function Header() {
  const itemsInBusket = useSelector(busketLength);
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
            onClick={() => navigate("")}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ONLINE SHOP
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="basket"
            sx={{ mr: 2 }}
            onClick={() => navigate("busket")}
          >
            <Badge badgeContent={itemsInBusket} color="secondary">
              <ShoppingBasketIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

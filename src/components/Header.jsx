import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { busketLength, openBusket } from "../redux/slices/busketSlice";
export default function Header() {
  const itemsInBusket = useSelector(busketLength);
  const dispatch = useDispatch();

  const openTheBusket = () => {
    dispatch(openBusket());
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ONLINE BEER SHOP
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="basket"
            sx={{ mr: 2 }}
            onClick={openTheBusket}
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

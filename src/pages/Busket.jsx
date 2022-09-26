import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  busketSelector,
  allItemsTotalSelector,
  buyItems,
  isOpenSelector,
  closeBusket,
} from "../redux/slices/busketSlice";
import BusketItem from "../components/BusketItem";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PaidIcon from "@mui/icons-material/Paid";
export default function Busket() {
  const busket = useSelector(busketSelector);
  const allTotal = useSelector(allItemsTotalSelector);
  const isBusketOpen = useSelector(isOpenSelector);
  const dispatch = useDispatch();
  const buyAllItems = () => {
    dispatch(buyItems());
  };
  const closeTheBusket = () => {
    dispatch(closeBusket());
  };
  return (
    <Drawer anchor={"right"} open={isBusketOpen} onClose={closeTheBusket}>
      <List sx={{ width: "350px" }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasketIcon />
          </ListItemIcon>
          <ListItemText primary="Basket" />
        </ListItem>
        <Divider />
        {!busket.length ? (
          <ListItem> Basket is Empty</ListItem>
        ) : (
          <>
            {busket.map((item) => (
              <BusketItem key={item.id} item={item} />
            ))}
            <Divider />
            <ListItem>
              <Typography sx={{ fontWeight: "700" }}>
                total :{allTotal}$
              </Typography>
              <IconButton
                sx={{ position: "absolute", right: "5px" }}
                onClick={buyAllItems}
              >
                <PaidIcon color="success" fontSize="large" />
              </IconButton>
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  );
}

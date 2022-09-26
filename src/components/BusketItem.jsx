import { ListItem, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteSelectedItem } from "../redux/slices/busketSlice";

export default function BusketItem({ item }) {
  const { title, price, count, id } = item;
  const dispatch = useDispatch();
  const deleteThisItem = () => {
    dispatch(deleteSelectedItem({ id }));
  };
  return (
    <ListItem>
      <Typography variant="body1" sx={{ padding: "5px" }}>
        {title} {price}$ x{count}
      </Typography>
      <IconButton
        onClick={deleteThisItem}
        sx={{ position: "absolute", right: "5px" }}
      >
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

import React from "react";
import { useDispatch } from "react-redux";
import {
  addBeerToBusket,
  removeBeerFromBusket,
} from "../redux/slices/productsSlice";
import { addToBusket, removeFromBusket } from "../redux/slices/busketSlice";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
export default function ProductCard({ item, initialRemain }) {
  const { id, title, price, remain, description, img } = item;
  const maxRemain = remain === initialRemain;
  const minRemain = remain === 0;
  const dispatch = useDispatch();
  const addItemToBusket = () => {
    dispatch(
      addBeerToBusket({
        id,
      })
    );
    dispatch(addToBusket({ title, price, id }));
  };
  const removeItemFromBusket = () => {
    dispatch(
      removeBeerFromBusket({
        id,
      })
    );
    dispatch(removeFromBusket({ id }));
  };

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={img} alt="beer img" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title} {price}$
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            color="primary"
            disabled={maxRemain}
            onClick={removeItemFromBusket}
          >
            -
          </Button>
          <Typography
            gutterBottom
            variant="h5"
            component="p"
            sx={{ margin: "0 auto" }}
          >
            {remain}
          </Typography>
          <Button
            variant="contained"
            size="small"
            color="primary"
            disabled={minRemain}
            onClick={addItemToBusket}
          >
            +
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

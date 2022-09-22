import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  beers: [
    {
      id: Math.random(),
      title: "Kilikia",
      description: "its an Armenian beer",
      price: 450,
      remain: 20,
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/78/81/ac/jabeerwocky-craft-beer.jpg",
    },
    {
      id: Math.random(),
      title: "Gyumri",
      description: "not best,but not worst beer",
      price: 400,
      remain: 30,
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/78/81/ac/jabeerwocky-craft-beer.jpg",
    },
    {
      id: Math.random(),
      title: "Hineken",
      description: "good beer for watching football",
      price: 520,
      remain: 15,
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/78/81/ac/jabeerwocky-craft-beer.jpg",
    },
    {
      id: Math.random(),
      title: "Stella",
      description: "Maybe a good beer,dont know",
      price: 350,
      remain: 7,
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/78/81/ac/jabeerwocky-craft-beer.jpg",
    },
    {
      id: Math.random(),
      title: "Razliv",
      description: "some kind of beer",
      price: 800,
      remain: 5,
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/78/81/ac/jabeerwocky-craft-beer.jpg",
    },
    {
      id: Math.random(),
      title: "Ararat",
      description: "good beer,but  not as good as kilikia",
      price: 420,
      remain: 26,
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/78/81/ac/jabeerwocky-craft-beer.jpg",
    },
    {
      id: Math.random(),
      title: "Dilijan",
      description: "new Armenian beer",
      price: 520,
      remain: 18,
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/78/81/ac/jabeerwocky-craft-beer.jpg",
    },
    {
      id: Math.random(),
      title: "Kotayk",
      description: "normal beer",
      price: 420,
      remain: 32,
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/78/81/ac/jabeerwocky-craft-beer.jpg",
    },
  ],
};
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addBeerToBusket(state, action) {
      state.beers = state.beers.map((beer) =>
        beer.id === action.payload.id
          ? { ...beer, remain: beer.remain - 1 }
          : beer
      );
    },
    removeBeerFromBusket(state, action) {
      state.beers = state.beers.map((beer) =>
        beer.id === action.payload.id
          ? { ...beer, remain: beer.remain + 1 }
          : beer
      );
    },
  },
});

export const { addBeerToBusket, removeBeerFromBusket } = productsSlice.actions;

export const productsSelector = (state) => state.products.beers;

export default productsSlice.reducer;
export const { beers } = productsSlice.getInitialState();

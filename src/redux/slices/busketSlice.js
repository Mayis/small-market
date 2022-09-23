import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  busket: [],
};

const busketSlice = createSlice({
  name: "busket",
  initialState,
  reducers: {
    addToBusket(state, { payload }) {
      const findItem = state.busket.find(({ id }) => id === payload.id);

      state.busket = findItem
        ? state.busket.map((item) =>
            item.id === findItem.id ? { ...item, count: item.count + 1 } : item
          )
        : [
            ...state.busket,
            {
              id: payload.id,
              title: payload.title,
              price: payload.price,
              count: 1,
            },
          ];
    },
    removeFromBusket(state, { payload }) {
      state.busket = state.busket
        .map((item) =>
          item.id === payload.id
            ? item.count > 1
              ? { ...item, count: item.count - 1 }
              : false
            : item
        )
        .filter((item) => item);
    },
    deleteSelectedItem(state, { payload }) {
      state.busket = state.busket.filter((item) => item.id !== payload.id);
    },
    buyItems(state) {
      state.busket = [];
    },
  },
});
export const { addToBusket, removeFromBusket, deleteSelectedItem, buyItems } =
  busketSlice.actions;
export const busketSelector = (state) => state.busket.busket;
export const allItemsTotalSelector = (state) =>
  state.busket.busket.reduce((curr, next) => curr + next.price * next.count, 0);

export default busketSlice.reducer;

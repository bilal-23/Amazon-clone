import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  quantity: 0
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.quantity++;
      const newitem = action.payload;
      const existingItem = state.items.find(item => item.id === newitem.id);
      if (!existingItem) {
        state.items.push({ ...newitem })
      } else {
        existingItem.quantity = existingItem.quantity + 1;
      }
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.quantity--;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;


export default basketSlice.reducer;

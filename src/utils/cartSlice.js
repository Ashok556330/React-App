import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
      addItem: (state, action) => {
        // mutating the state here
        state.items.push(action.payload);
      },
      removeItem: (state) => {
        state.items.pop()
      },
      clearCart: (state) => {
        // RTK - either mutate the existing or return a new state
        state.items.length = 0;
        // return {items: []}; // this new [] will be replaced inside original State = {items: []}
      },
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
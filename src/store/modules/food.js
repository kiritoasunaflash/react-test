import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const foodStore = createSlice({
  name: "food",
  initialState: {
    foodList: [],
    activeIndex: 0,
    cartList: [],
  },
  reducers: {
    getFood(state, action) {
      state.foodList = action.payload;
    },
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    addCart(state, action) {
      const findItem = state.cartList.find(
        (item) => item.id === action.payload.id
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.cartList.push(action.payload);
      }
    },
  },
});
const { getFood, changeActiveIndex, addCart } = foodStore.actions;
const fetchHandleFood = () => {
  return async (dispatch) => {
    const res = await axios.get(" http://localhost:3004/takeaway");
    dispatch(getFood(res.data));
  };
};
export { fetchHandleFood, changeActiveIndex, addCart };
const foodRuducer = foodStore.reducer;
export default foodRuducer;

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const foodStore = createSlice({
  name: "food",
  initialState: {
    foodList: [],
  },
  reducers: {
    getFood(state, action) {
      state.foodList = action.payload;
    },
  },
});
const { getFood } = foodStore.actions;
const fetchHandleFood = () => {
  return async (dispatch) => {
    const res = await axios.get(" http://localhost:3004/takeaway");
    dispatch(getFood(res.data));
  };
};
export { fetchHandleFood };
const foodRuducer = foodStore.reducer;
export default foodRuducer;

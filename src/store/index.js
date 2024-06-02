import { configureStore } from "@reduxjs/toolkit";
import foodRuducer from "./modules/food";
const store = configureStore({
  reducer: {
    food: foodRuducer,
  },
});
export default store;

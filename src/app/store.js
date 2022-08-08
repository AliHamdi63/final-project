import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice'
import mealReducer from "../features/meal/mealSlice";
import authReducer from "../features/authenticate/authSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    meal: mealReducer,
    auth: authReducer
  },
});

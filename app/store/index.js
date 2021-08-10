import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import mealsSlice from "./mealsSlice";

const store = configureStore({
  reducer: {
    meals: mealsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});

export default store;

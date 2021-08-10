import { createSlice } from "@reduxjs/toolkit";
import { MEALS } from "../data/dummy-data";

const initialState = {
  meals: MEALS,
  favourites: [],
};

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    toggleFavourite: {
      reducer: (state, action) => {
        // const meal = state.meals.find((meal) => meal.id === action.payload);
        // favourites: state.favourites.push(meal)
        // console.log(state.favourites);
        const existingIndex = state.favourites.findIndex(
          (meal) => meal.id === action.payload
        );
        if (existingIndex >= 0) {
          state.favourites = state.favourites.splice(existingIndex);
        } else {
          const meal = state.meals.find((meal) => meal.id === action.payload);
          state.favourites = state.favourites.concat(meal);
        }
        {
        }
      },
      //prepare: (id) => ({ payload: id }),
    },
  },
});

export const mealsActions = mealsSlice.actions;

export default mealsSlice;

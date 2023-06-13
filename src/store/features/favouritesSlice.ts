import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Drink } from "../../interfaces/Cocktail";

interface FavouritesState {
  favouriteCocktails: Drink[];
}

const initialState: FavouritesState = {
  favouriteCocktails: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addCocktailToFavourites(state, action: PayloadAction<Drink>) {
      state.favouriteCocktails.push(action.payload);
    },
    removeCocktailFromFavourites(state, action: PayloadAction<Drink>) {
      const index = state.favouriteCocktails.findIndex(
        (cocktail) => cocktail.idDrink === action.payload.idDrink
      );

      if (index !== -1) {
        state.favouriteCocktails.splice(index, 1);
      }
    },
    resetFavourites(state) {
      state.favouriteCocktails = [];
    },
  },
});

export const {
  addCocktailToFavourites,
  removeCocktailFromFavourites,
  resetFavourites,
} = favouritesSlice.actions;

export default favouritesSlice.reducer;

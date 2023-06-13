import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Drink } from "../../interfaces/Cocktail";

interface FilteredCocktailState {
  cocktails: Drink[];
}

const initialState: FilteredCocktailState = {
  cocktails: [],
};

const filteredCocktailSlice = createSlice({
  name: "filteredCocktails",
  initialState,
  reducers: {
    setFilteredCocktails(state, action: PayloadAction<Drink[]>) {
      state.cocktails = action.payload;
    },
  },
});

export const { setFilteredCocktails } = filteredCocktailSlice.actions;

export default filteredCocktailSlice.reducer;

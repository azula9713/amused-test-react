import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import Server from "../../services/Axios";
import { Drink } from "../../interfaces/Cocktail";
import findExistingCocktails from "../../utils/FindExistingCocktails";

interface CocktailState {
  cocktails: Drink[];
  loading: boolean;
  error: string | null;
}

const initialState: CocktailState = {
  cocktails: [],
  loading: false,
  error: null,
};

export const fetchRandomCocktails = createAsyncThunk(
  "cocktails/fetchRandomCocktails",
  async (count: number) => {
    const cocktailArray: Drink[] = [];

    for (let i = 0; i < count; i++) {
      const response = await Server.get(`/1/random.php`);
      const cocktails = response.data.drinks || [];

      if (cocktails.length > 0) {
        const cocktail = cocktails[0];
        const isCocktailInArray = findExistingCocktails(
          cocktail,
          cocktailArray
        );

        if (isCocktailInArray) {
          i--;
          continue;
        }
      }

      cocktailArray.push(cocktails[0]);
    }

    return cocktailArray;
  }
);

const cocktailsSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomCocktails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchRandomCocktails.fulfilled,
        (state, action: PayloadAction<Drink[]>) => {
          state.loading = false;
          state.cocktails = action.payload;
        }
      )
      .addCase(fetchRandomCocktails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch cocktails";
      });
  },
});

export default cocktailsSlice.reducer;

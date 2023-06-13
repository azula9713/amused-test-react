import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import cocktailRedcuer from "./features/cocktailSlice";
import favouritesReducer from "./features/favouritesSlice";
import filteredCocktailReducer from "./features/filteredCoktailSlice";

const favouritesPersistConfig = {
  key: "favourites",
  storage,
};

const rootReducer = combineReducers({
  cocktail: cocktailRedcuer,
  favourites: persistReducer(favouritesPersistConfig, favouritesReducer),
  filteredCocktails: filteredCocktailReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

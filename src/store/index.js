import { configureStore } from "@reduxjs/toolkit";
import { bgImageSliceReducer } from "./slices/bgImageSlice";
import {
  searchLocationSliceReducer,
  changeSearchTerm,
} from "./slices/searchLocationSlice";
import { weatherDataSliceReducer, changeTemp } from "./slices/weatherDataslice";

const store = configureStore({
  reducer: {
    bgImage: bgImageSliceReducer,
    searchLocation: searchLocationSliceReducer,
    weatherData: weatherDataSliceReducer,
  },
});

export { store, changeSearchTerm, changeTemp };
export * from "./thunks/getBgImage";
export * from "./thunks/getWeatherData";

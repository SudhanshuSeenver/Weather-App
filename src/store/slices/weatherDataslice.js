import { createSlice } from "@reduxjs/toolkit";
import { getWeatherData } from "../thunks/getWeatherData";

const weatherDataSlice = createSlice({
  name: "weatherData",
  initialState: {
    currentData: {},
    forecastData: [],
    hourlyData: {},
    tempUnit: "celcius",
    error: null,
    loader: false,
  },
  reducers: {
    changeTemp(state, action) {
      if (state.tempUnit === "celcius") state.tempUnit = "farhenheit";
      else if (state.tempUnit === "farhenheit") state.tempUnit = "celcius";
    },
  },
  extraReducers(builder) {
    builder.addCase(getWeatherData.pending, (state, action) => {
      state.loader = true;
      state.error = null;
    });
    builder.addCase(getWeatherData.fulfilled, (state, action) => {
      const {
        weatherDataCurrent,
        weatherForecastData,
        name,
        precipitation,
        weatherHourlyData,
      } = action.payload;
      state.currentData = {
        ...weatherDataCurrent,
        mainName: name,
        precipitation,
      };
      state.forecastData = weatherForecastData;
      state.hourlyData = weatherHourlyData;
      state.loader = false;
    });
    builder.addCase(getWeatherData.rejected, (state, action) => {
      state.loader = false;
      console.log(action.error);
      state.error = action.error;
    });
  },
});

export const weatherDataSliceReducer = weatherDataSlice.reducer;
export const { changeTemp } = weatherDataSlice.actions;

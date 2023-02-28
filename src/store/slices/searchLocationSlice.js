import { createSlice } from "@reduxjs/toolkit";

const searchLocationSlice = createSlice({
  name: "searchLocation",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const searchLocationSliceReducer = searchLocationSlice.reducer;
export const { changeSearchTerm } = searchLocationSlice.actions;

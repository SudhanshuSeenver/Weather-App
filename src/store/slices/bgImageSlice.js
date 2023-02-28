import { createSlice } from "@reduxjs/toolkit";
import { getBgImage } from "../thunks/getBgImage";

const bgImageSlice = createSlice({
  name: "bgImage",
  initialState: "",
  extraReducers(builder) {
    builder.addCase(getBgImage.pending, (state, action) => {
      return "";
    });
    builder.addCase(getBgImage.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(getBgImage.rejected, (state, action) => {
      return "";
    });
  },
});

export const bgImageSliceReducer = bgImageSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const provinceSlice = createSlice({
  name: "provinces",
  initialState: {
    Allprovinces: {},
  },
  reducers: {
    setProvinces(state, { payload }) {
      state.Allprovinces = payload;
    },
  },
});

export const { setProvinces } = provinceSlice.actions;

export default provinceSlice.reducer;

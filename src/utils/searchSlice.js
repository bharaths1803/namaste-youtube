import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      const [k, v] = Object.entries(action.payload)[0];
      state[k] = v;
    },
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;

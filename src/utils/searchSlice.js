import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      const [k, v] = Object.entries(action.payload)[0];
      console.log("Action paylod in search slice", k, v);
      state[k] = v;
      console.log("State", state[k]);
    },
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;

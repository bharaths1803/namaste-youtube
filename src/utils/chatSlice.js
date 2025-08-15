import { createSlice } from "@reduxjs/toolkit";
import { MESSAGES_CNT_IN_CHAT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length >= MESSAGES_CNT_IN_CHAT)
        state.messages.splice(MESSAGES_CNT_IN_CHAT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    player: null,
  },
  reducers: {
    setPlayer(state, { payload }) {
      state.player = payload;
      console.log('setting value of player')
    },
    stopPlayer(state) {

    },
    startPlayer(state) {

    }
  },
});

export const { setPlayer, startPlayer, stopPlayer } = playerSlice.actions;

export default playerSlice.reducer;

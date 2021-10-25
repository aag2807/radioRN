import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'stations',
  initialState: {
    allStations: [],
  },
  reducers: {
    setStations(state, { payload }) {
      let map = [...payload];
      state.allStations = map
     // state.activeStations = map.filter((station) => station.IsActive); 
    },
  }
})

export const { setStations } = appSlice.actions

export default appSlice.reducer
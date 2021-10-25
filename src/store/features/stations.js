import { createSlice } from '@reduxjs/toolkit'

const stationSlice = createSlice({
  name: 'stations',
  initialState: {
    allStations: [],
    activeStations: [],
    favoriteStations: [],
    recentStations: []
  },
  reducers: {
    setStations(state, { payload }) {
      let map = [...payload];
      state.allStations = map
     // state.activeStations = map.filter((station) => station.IsActive); 
    },
  }
})

export const { setStations } = stationSlice.actions

export default stationSlice.reducer
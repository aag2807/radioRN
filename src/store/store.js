import { configureStore } from '@reduxjs/toolkit'
import stationSlice from './features/stations'

export const store = configureStore({
  reducer: {
    stations: stationSlice
  },
})
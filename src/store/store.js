import {
  configureStore,
  createSerializableStateInvariantMiddleware,
  getDefaultMiddleware,
  isPlain,
} from "@reduxjs/toolkit";
import { Iterable } from 'immutable'
import stationSlice from "./features/stations";
import provinceSlice from "./features/provinces";
import playerSlice from "./features/player";

// Augment middleware to consider Immutable.JS iterables serializable
const isSerializable = (value) =>
  Iterable.isIterable(value) || isPlain(value)

const getEntries = (value) =>
  Iterable.isIterable(value) ? value.entries() : Object.entries(value)

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  isSerializable,
  getEntries,
})


export const store = configureStore({
  reducer: {
    stations: stationSlice,
    provinces: provinceSlice,
    player: playerSlice
  },
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware({
    serializableCheck: false
  }),
});

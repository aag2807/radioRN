import { createSlice } from "@reduxjs/toolkit";
import { current } from "immer";

const stationSlice = createSlice({
  name: "stations",
  initialState: {
    allStations: [],
    activeStations: [],
    deactivatedStations: [],
    favoriteStations: [],
    recentStations: [],
  },
  reducers: {
    setStations(state, { payload }) {
      let map = [...payload];
      state.allStations = map;
      state.activeStations = map.filter((station) => station.IsActive);
      state.deactivatedStations = map.filter((station) => !station.IsActive);
    },

    //FAVORITES START
    //#region
    addToFavorites(state, { payload }) {
      let map = [...state.favoriteStations];

      let m = map.filter((station) => station.Id == payload.Id);
      if (m.length) return;

      state.activeStations.forEach((station) => {
        if (station.Id == payload.Id) {
          let newStationObj = Object.assign({}, payload);
          newStationObj["Favorite"] = true;
          station["Favorite"] = true;
          map.push(newStationObj);
        }
      });

      state.favoriteStations = map;
    },
    removeFromFavorites(state, { payload }) {
      let map = [...state.favoriteStations].filter(
        (station) => station.Id != payload.Id
      );
      state.activeStations.forEach((station) => {
        if (station.Id == payload.Id) {
          station["Favorite"] = false;
        }
      });
      state.favoriteStations = map;
    },
    //#endregion
    //FAVORITES END
    //-------------\\
    //PLAYING START
    //#region
    startPlaying(state, { payload }) {
      state.allStations.forEach((station) => {
        
        if (station.IsPlaying) {
          station["IsPlaying"] = false;
        }

        if (station.Id == payload.Id) {
          station["IsPlaying"] = true;
        
        }
        
      });
      state.activeStations = state.allStations.filter((station) => station.IsActive);
    },
    stopPlaying(state, { payload }) {
      state.allStations.forEach((station) => {
        if (station.Id == payload.Id) {
          station["IsPlaying"] = false;
        }
      });
      state.activeStations = state.allStations.filter((station) => station.IsActive);
    },
    //#endregion
    //PLAYING END
  },
});

export const {
  setStations,
  addToFavorites,
  removeFromFavorites,
  startPlaying,
  stopPlaying,
} = stationSlice.actions;

export default stationSlice.reducer;

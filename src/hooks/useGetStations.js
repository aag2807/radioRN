import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { from } from "rxjs";
import { pluck, tap, map } from "rxjs/operators";

//UTILS
import { HTTPStationClient } from "../utils/httpclient";
import { URL } from "../utils/URL";

// REDUX
import { setStations } from "../store/features/stations";
import axios from "axios";

const useGetStations = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [station, setStation] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    let obs = from(axios.get(URL.GET_STATIONS))
      .pipe(pluck("data"), map(atob), map(JSON.parse))

    obs.subscribe({
      next: (stations) => {
        setStation(stations);
      },
      error: (error) => {
        console.error(error);
        setStation([]);
        setIsLoading(false);
      },
      complete: () => {
        setIsLoading(false);
      },
    });

 
    return () => {
      obs.unsubscribe()
    }

  }, []);

  return { isLoading: isLoading, stations: station };
};

export default useGetStations;

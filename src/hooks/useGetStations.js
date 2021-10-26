import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { from } from 'rxjs'
import { pluck } from 'rxjs/operators'

//UTILS
import { HTTPStationClient } from '../utils/httpclient'
import { URL } from '../utils/URL'

// REDUX
import { setStations } from '../store/features/stations';


const useGetStations = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false);
  const [station, setStation] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    from(HTTPStationClient(URL.GET_STATIONS))
      .pipe(
        pluck('data')
      )
      .subscribe({
        next: (x) => {
          let unserialzedStations = atob(x);
          let parsedStations = JSON.parse(unserialzedStations)
          setStation(parsedStations)
        },
        error: (error) => {
          console.log(error)
          setIsLoading(false);
          dispatch(setStations([]))
        },
        complete: () => {
          dispatch(setStations(station))
          setIsLoading(false);
        }
      })
      dispatch(setStations([{}, {}]))

  }, [])

  return { isLoading: isLoading }
}

export default useGetStations

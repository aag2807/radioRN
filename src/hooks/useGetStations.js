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

  useEffect(() => {
    setIsLoading(true);
    from(HTTPStationClient(URL.GET_STATIONS))
      .pipe(
        pluck('data')
      )
      .subscribe({
        next: (x) => {
          console.log(x)
        },
        error: (error) => {
          console.log(error)
        },
        complete: () => {
          setIsLoading(false);
          console.log('completed')
        }
      })
      dispatch(setStations([{}, {}]))

  }, [])

  return { isLoading: isLoading }
}

export default useGetStations

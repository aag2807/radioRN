import { useEffect, useState } from "react";
import { from } from "rxjs";
import { pluck, bufferTime } from "rxjs/operators";

//UTILS
import { URL } from "../utils/URL";

// REDUX
import axios from "axios";

const useGetProvinces = () => {
  const [provincesMap, setProvincesMap] = useState({});

  useEffect(() => {
    let obs = from(axios.get(URL.GET_PROVINCES))
      .pipe(pluck("data"), bufferTime(1000))

    obs.subscribe({
      next: (provinces) => {
        let provincePOJO = {};
        provinces.forEach((provincesArray) => {
          provincesArray.forEach((p) => {
            provincePOJO[p.Id] = p.Name;
          });
        });
        setProvincesMap(provincePOJO);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log("DONE LOADING");
      },
    });

    return () => {
      obs.unsubscribe()
    }
  }, []);

  return { provinces: provincesMap };
};

export default useGetProvinces;

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import React from "react";

export let TvContext = createContext(0);

export default function TvContextProvider(props) {
  let [tvData, setTvData] = useState([]);
  let [status, setStatus] = useState("none");
  let getTv = async function () {
    await axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?api_key=d573091d322cd7c9ffc56a9c542c5aad"
      )
      .then(({ data: { results } }) => {
        setTvData(results);
        setStatus("done");
      })
      .catch((err) => {
        setStatus("error");
        console.log(err);
      });
  };

  useEffect(() => {
    getTv();
  }, []);
  return (
    <TvContext.Provider value={{ tvData, status }}>
      {props.children}
    </TvContext.Provider>
  );
}

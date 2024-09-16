import axios from "axios";
import React, { useState, createContext, useEffect } from "react";

export let MoviesContext = createContext(0);

export default function MoviesContextProvider(props) {
  let [moviesData, setMoviesData] = useState([]);
  let [status, setStatus] = useState("none");
  let getMovies = async function () {
    await axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=d573091d322cd7c9ffc56a9c542c5aad"
      )
      .then(({ data: { results } }) => {
        setMoviesData(results);
        setStatus("done");
      })
      .catch((err) => {
        setStatus("error");
        console.log(err);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <MoviesContext.Provider value={{ moviesData, status }}>
      {props.children}
    </MoviesContext.Provider>
  );
}

import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import Card from "../Card";
import Loading from "../Loading";

export default function Home() {
  let [moviesData, setMoviesData] = useState([]);
  let [status, setStatus] = useState("none");
  let navigate = useNavigate();

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

  return status === "error" ? (
    navigate("error")
  ) : status === "none" ? (
    <Loading />
  ) : (
    moviesData.map((movie) => <Card movie={movie} key={movie.id} />)
  );
}

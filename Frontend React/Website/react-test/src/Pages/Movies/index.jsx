import React, { useContext } from "react";
import MovieCard from "../../components/MovieCard";
import { text } from "./style.modules.css";
import { MoviesContext } from "../../components/Store/MoviesContextProvider";

export default function Movies() {
  let { moviesData } = useContext(MoviesContext);
  return moviesData.map((movie) => <MovieCard movie={movie} key={movie.id} />);
}

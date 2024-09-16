import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { movie_details } from "./style.modules.css";

export default function MovieDetails() {
  let [movie, setMovie] = useState({
    title: "",
    poster_path: "",
    overview: "",
  });
  let { id } = useParams();
  let getMovie = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=d573091d322cd7c9ffc56a9c542c5aad`
      )
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="movie_details row">
      <div className="col-md-3">
        <div className="w-100">
          <img
            src={`https://image.tmdb.org/t/p/w500` + movie?.poster_path}
            alt={movie?.title}
            className="w-100"
          />
        </div>
      </div>
      <div className="col-md-8 offset-1">
        <h1>Name: {movie?.title}</h1>
        <p>Overview: {movie?.overview}</p>
      </div>
    </div>
  );
}

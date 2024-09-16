import React from "react";
import { movie_card } from "./style.modules.css";
import { Link } from "react-router-dom";

export default function MovieCard({ movie: { poster_path, title, id } }) {
  return (
    <div className="col-md-2">
      <div className="movie_card border-0 w-100">
        <Link to={`/movie/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500` + poster_path}
            alt={title}
            className="w-100"
          />
        </Link>
        <h4 className="my-1 text-decoration-none">{title}</h4>
      </div>
    </div>
  );
}

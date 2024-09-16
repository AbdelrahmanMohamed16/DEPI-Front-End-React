import React from "react";
import { Link } from "react-router-dom";

export default function TvCard({ tv: { poster_path, name, id } }) {
  return (
    <div className="col-md-2">
      <div className="tv_card border-0 w-100">
        <Link to={`/tv/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500` + poster_path}
            alt={name}
            className="w-100"
          />
        </Link>
        <h4 className="my-1 text-decoration-none">{name}</h4>
      </div>
    </div>
  );
}

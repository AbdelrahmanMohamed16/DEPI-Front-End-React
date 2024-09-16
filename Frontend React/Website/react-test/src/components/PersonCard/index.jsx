import React from "react";
import { person_card } from "./style.modules.css";
import { Link } from "react-router-dom";

export default function PersonCard({ person: { profile_path, name, id } }) {
  return (
    <div className="col-md-2">
      <div className="persons_card border-0 w-100">
        <Link to={`/person/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500` + profile_path}
            alt={name}
            className="w-100"
          />
        </Link>
        <h4 className="my-1 text-decoration-none">{name}</h4>
      </div>
    </div>
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { tv_details } from "./style.modules.css";

export default function TvDetails() {
  let [tv, setTv] = useState({
    name: "",
    poster_path: "",
    overview: "",
  });
  let { id } = useParams();
  let getTv = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=d573091d322cd7c9ffc56a9c542c5aad`
      )
      .then((res) => setTv(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getTv();
  }, []);
  return (
    <div className="tv_details row">
      <div className="col-md-3">
        <div className="w-100">
          <img
            src={`https://image.tmdb.org/t/p/w500` + tv?.poster_path}
            alt={tv?.name}
            className="w-100"
          />
        </div>
      </div>
      <div className="col-md-8 offset-1">
        <h1>Name: {tv?.name}</h1>
        <p>Overview: {tv?.overview}</p>
      </div>
    </div>
  );
}

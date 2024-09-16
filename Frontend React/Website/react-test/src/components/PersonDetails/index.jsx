import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { person_details } from "./style.modules.css";

export default function PersonDetails() {
  let [person, setPerson] = useState({
    title: "",
    poster_path: "",
    overview: "",
  });
  let { id } = useParams();
  let getPerson = async () => {
    console.log(id);
    await axios
      .get(
        `https://api.themoviedb.org/3/person/${id}?api_key=d573091d322cd7c9ffc56a9c542c5aad`
      )
      .then((res) => setPerson(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPerson();
  }, []);
  return (
    <div className="perosn_details row">
      <div className="col-md-3">
        <div className="w-100">
          <img
            src={`https://image.tmdb.org/t/p/w500` + person?.profile_path}
            alt={person?.name}
            className="w-100"
          />
        </div>
      </div>
      <div className="col-md-8 offset-1">
        <h1>Name: {person?.name}</h1>
      </div>
    </div>
  );
}

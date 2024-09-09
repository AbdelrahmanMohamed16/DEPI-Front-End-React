import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card";

export default function Assignment2() {
  let [moviesData, setMoviesData] = useState([]);

  let getMovies = async function () {
    await axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=d573091d322cd7c9ffc56a9c542c5aad"
      )
      .then(({ data: { results } }) => {
        setMoviesData(results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="containter">
      <div className="row g-4 my-5">
        {moviesData.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

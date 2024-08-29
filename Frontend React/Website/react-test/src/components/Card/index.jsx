import React from 'react'
import "./style.css"

export default function Card({movie}) {
  console.log("Heloooooooo")
  console.log(movie)
  return (
    <div className="col-md-3">
        <div className="card">
            <img src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} alt={movie.name}></img>
            <h4>{movie.name}</h4>
            <p>{movie.overview}</p>
        </div>
    </div>
  )
}

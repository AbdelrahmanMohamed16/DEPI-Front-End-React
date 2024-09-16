import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import Loading from "../Loading";
import MoviesContextProvider, {
  MoviesContext,
} from "../../components/Store/MoviesContextProvider";
import PersonsContextProvider, {
  PersonsContext,
} from "../../components/Store/PersonsContextProvider";
import Movies from "../Movies";
import People from "../People";
import { text } from "./style.modules.css";
import TvContextProvider from "../../components/Store/TvContextProvider";
import TV from "../TV";

export default function Home() {
  let { status } = useContext(MoviesContext);
  let navigate = useNavigate();
  return (
    <div className="row">
      {status === "error" ? (
        navigate("error")
      ) : status === "none" ? (
        <Loading />
      ) : (
        <>
          <div className="row my-3">
            <div className="col-md-4 d-flex align-items-center">
              <div className="text">
                <h2>
                  Trending
                  <br /> Movies
                  <br /> To Watch Right Now
                </h2>
                <span className="text-info">Top Trending Movies by Day</span>
              </div>
            </div>
            <MoviesContextProvider>
              <Movies />
            </MoviesContextProvider>
          </div>
          <div className="row my-3">
            <div className="col-md-4 d-flex align-items-center">
              <div className="text">
                <h2>
                  Trending
                  <br /> People
                  <br /> To Follow Right Now
                </h2>
                <span className="text-info">Top Trending People by Day</span>
              </div>
            </div>
            <PersonsContextProvider>
              <People />
            </PersonsContextProvider>
          </div>

          <div className="row my-3">
            <div className="col-md-4 d-flex align-items-center">
              <div className="text">
                <h2>
                  Trending
                  <br /> TV Shows
                  <br /> To Watch Right Now
                </h2>
                <span className="text-info">Top Trending TV Shows by Day</span>
              </div>
            </div>
            <TvContextProvider>
              <TV />
            </TvContextProvider>
          </div>
        </>
      )}
    </div>
  );
}

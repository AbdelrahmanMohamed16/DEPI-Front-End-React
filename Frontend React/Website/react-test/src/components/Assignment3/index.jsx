import React, { useContext } from "react";
import Navbar from "../Navbar";
import { Navigate, Route, Routes } from "react-router";
import Home from "../../Pages/Home";
import NotFound from "../../Pages/NotFound";
import "./style.css";
import MovieDetails from "../MovieDetails";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import { AuthContext } from "../Store/AuthContextProvider";
import MoviesContextProvider from "../Store/MoviesContextProvider";
import PersonsContextProvider from "../Store/PersonsContextProvider";
import Movies from "../../Pages/Movies";
import People from "../../Pages/People";
import PersonDetails from "../PersonDetails";
import TvDetails from "../TvDetails";
import TvContextProvider from "../Store/TvContextProvider";
import TV from "../../Pages/TV";

function ProtectedRoute({ token, children }) {
  return token ? children : <Navigate to={"login"} />;
}

export default function Assignment3() {
  let { token } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row my-3 g-4">
          <Routes>
            <Route
              path=""
              element={
                <ProtectedRoute token={token}>
                  <MoviesContextProvider>
                    <PersonsContextProvider>
                      <Home />
                    </PersonsContextProvider>
                  </MoviesContextProvider>
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="home"
              element={
                <ProtectedRoute token={token}>
                  <MoviesContextProvider>
                    <PersonsContextProvider>
                      <Home />
                    </PersonsContextProvider>
                  </MoviesContextProvider>
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="movies"
              element={
                <ProtectedRoute token={token}>
                  <MoviesContextProvider>
                    <Movies />
                  </MoviesContextProvider>
                </ProtectedRoute>
              }
            />
            <Route
              path="people"
              element={
                <ProtectedRoute token={token}>
                  <PersonsContextProvider>
                    <People />
                  </PersonsContextProvider>
                </ProtectedRoute>
              }
            />
            <Route
              path="tv"
              element={
                <ProtectedRoute token={token}>
                  <TvContextProvider>
                    <TV />
                  </TvContextProvider>
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="movie/:id"
              element={
                <ProtectedRoute token={token}>
                  <MovieDetails />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="person/:id"
              element={
                <ProtectedRoute token={token}>
                  <PersonDetails />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="tv/:id"
              element={
                <ProtectedRoute token={token}>
                  <TvDetails />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="error"
              element={
                <ProtectedRoute token={token}>
                  <NotFound />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route
              path="*"
              element={
                <ProtectedRoute token={token}>
                  <NotFound />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

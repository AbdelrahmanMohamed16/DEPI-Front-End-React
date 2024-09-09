import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import { Route, Routes } from "react-router";
import Home from "../Home";
import NotFound from "../NotFound";
import "./style.css";

export default function Assignment3() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row my-3 g-4">
          <Routes>
            <Route path="" element={<Home />}></Route>
            <Route path="error" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

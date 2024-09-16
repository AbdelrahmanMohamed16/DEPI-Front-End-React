import axios from "axios";
import React, { useState, createContext, useEffect } from "react";

export let PersonsContext = createContext(0);

export default function PersonsContextProvider(props) {
  let [personsData, setPersonsData] = useState([]);
  let [status, setStatus] = useState("none");
  let getPersons = async function () {
    await axios
      .get(
        "https://api.themoviedb.org/3/person/popular?api_key=d573091d322cd7c9ffc56a9c542c5aad"
      )
      .then(({ data: { results } }) => {
        setPersonsData(results);
        setStatus("done");
      })
      .catch((err) => {
        setStatus("error");
        console.log(err);
      });
  };

  useEffect(() => {
    getPersons();
  }, []);
  return (
    <PersonsContext.Provider value={{ personsData, status }}>
      {props.children}
    </PersonsContext.Provider>
  );
}

import React, { useContext } from "react";
import PersonCard from "../../components/PersonCard";
import { PersonsContext } from "../../components/Store/PersonsContextProvider";

export default function People() {
  let { personsData } = useContext(PersonsContext);
  return personsData.map((person) => (
    <PersonCard person={person} key={person.id} />
  ));
}

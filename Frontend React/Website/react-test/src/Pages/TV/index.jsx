import React, { useContext } from "react";
import { TvContext } from "../../components/Store/TvContextProvider";
import { text } from "./style.modules.css";
import TvCard from "../../components/TvCard";
export default function TV() {
  let { tvData } = useContext(TvContext);
  return tvData.map((tv) => <TvCard tv={tv} key={tv.id} />);
}

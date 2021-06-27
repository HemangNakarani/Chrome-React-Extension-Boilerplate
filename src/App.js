import React from "react";
import style from "./App.module.css";
import Experiment from "./assets/experiment.gif";

export default function App() {
  return (
    <>
      <div className={style["App"]}>Hello From Content Script</div>
      <img src={chrome.runtime.getURL(Experiment)}></img>
    </>
  );
}

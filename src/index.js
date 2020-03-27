import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import CardPlay from "./components/CardPlay";

function App() {
  return(
    <article>
    <CardPlay />
    <CardPlay />
    <CardPlay />
    <CardPlay />
    </article>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

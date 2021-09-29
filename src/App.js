import React from "react";
import score from "./ScoreCard/score";

import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Lets get started!!</p>
      <p>{score()}</p>
    </div>
  );
}

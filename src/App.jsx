import React from "react";
import { useState } from "react";
import reactLogo from "./assets/images.png";
import Page from "./Page";
import "./App.css";

function App() {
  return (
    <div className="page">
      <h2>
        <img src="./src/assets/images.png" width={50} alt="" />
        ReactFacts
      </h2>
      <Page />
    </div>
  );
}

export default App;

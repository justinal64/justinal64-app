import React from "react";
import "./App.css";
import { Counter } from "./singleton/singleton";

function App() {
  const counter = new Counter();
  counter.increment();
  console.log(counter.getCount());

  return <div className="App"></div>;
}

export default App;

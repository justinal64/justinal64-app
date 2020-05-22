import React from "react";
import "./App.css";
import { TextInput } from "@justinal64/dashboard";

const App = () => {
  return (
    <div className="App">
      <TextInput
        label="test"
        placeholder="placeholder"
        value="2"
        onChange={() => {}}
        helpText="helptext"
      />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [name, setname] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code> src / App.js </code> and se to reloa.{" "}
        </p>
        <button onClick={() => setname("Eyo")}>SetName</button>
        {name.length && <h1>yes...length is tru</h1>}
      </header>
    </div>
  );
}

export default App;

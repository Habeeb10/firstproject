import React, { useState } from "react";
import "./App.css";
import Header from "./component/header";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="imageandtext">
        <div className="text">
          <h1>A new model for open collaboration</h1>
          <p>
            Run an organization where members get rewarded for their
            contributions with fractional ownership
          </p>
          <button>Request early access</button>
        </div>
        <div className="photo">
          <img src={require("../../src/bg.png")} />
        </div>
      </div>
    </div>
  );
}

export default App;

// class App2 extends React.Component {
//   state = {
//     name: "dgdgg",
//   };
//   render() {
//     return (
//       <div className="App">
//         <h1>{this.state.name}</h1>
//         <button onClick={() => this.setState({ name: "malik" })}></button>
//       </div>
//     );
//   }
// }

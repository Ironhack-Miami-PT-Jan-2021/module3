import React from "react";
import Student from "./components/Student";
import Cohort from "./components/Cohort";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Student thisIsAProp="bla" myName="Keith" position="Backend" />
      <Student myName="Alexandra" position="Frontend" />
      <Student myName="Matt" position="Frontend" />
      <button onClick={() => console.log("clicked")}>click me</button>
      <Cohort />
      {/* <div className="student">
        <h1>Alexandra</h1>
        <h3>Frontend</h3>
      </div>
      <div className="student">
        <h1>Matt</h1>
        <h3>Frontend</h3>
      </div>*/}
    </div>
  );
}

export default App;

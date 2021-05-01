import React from "react";
import Student from "./components/Student";
import Cohort from "./components/Cohort";
import Idea from "./components/Idea";
import "./App.css";

function App() {
  const ideas = ["Idea one", "Idea two", "Idea three"];

  // const renderIdeas = () => {
  //   const ideaComponentsArray = [];
  //   for (let i = 0; i < ideas.length; i++) {
  //     ideaComponentsArray.push(<Idea data={ideas[i]} />);
  //   }
  //   return ideaComponentsArray;
  // };

  return (
    <div className="App">
      {/* <Student thisIsAProp="bla" myName="Keith" position="Backend" />
      <Student myName="Alexandra" position="Frontend" />
      <Student myName="Matt" position="Frontend" />
      <button onClick={() => console.log("clicked")}>click me</button>
      <Cohort name="Matt" /> */}
      {/* <div className="student">
        <h1>Alexandra</h1>
        <h3>Frontend</h3>
      </div>
      <div className="student">
        <h1>Matt</h1>
        <h3>Frontend</h3>
      </div>*/}
      <Idea data={ideas[0]} />
      <Idea data={ideas[1]} />
      {/* {renderIdeas()} */}
    </div>
  );
}

export default App;

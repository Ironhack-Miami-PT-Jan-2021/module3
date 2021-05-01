import React, { Component } from "react";
import WebDev from "./WebDev";

export default class Cohort extends Component {
  // constructor is old way od doing things, babel does this for us under the hood
  constructor(props) {
    super(props);
    this.state = {
      emoji: "🍔",
      count: 0,
    };
  }

  //   state = {
  //     emoji: "🍔",
  //     count: 0,
  //   };

  randomizeEmoji = () => {
    const newEmoji = ["🍕", "🌭", "🧈", "🥞"];
    const randIndex = Math.floor(Math.random() * newEmoji.length);
    this.setState({
      emoji: newEmoji[randIndex],
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Jan 2021 Cohort Rules! {this.props.name}</h1>
        <WebDev cohortName={this.props.name} />
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Inc count
        </button>
        <h1>{this.state.emoji}</h1>
        <button onClick={this.randomizeEmoji}>Click me</button>
      </div>
    );
  }
}

// export default function cohort(props) {
//   return <h1>Jan 2021 Cohort Rules! {props.name}</h1>;
// }

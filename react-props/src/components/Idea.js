import React from "react";

class Idea extends React.Component {
  state = {
    taskCounter: 0,
  };

  handleTaskCounterIncrease = () => {
    this.setState({
      taskCounter: this.state.taskCounter + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Idea! {this.props.data}</h1>
        <h3>Tasks compleated so far: {this.state.taskCounter}</h3>
        <button onClick={this.handleTaskCounterIncrease}>Complete task</button>
      </div>
    );
  }
}

export default Idea;

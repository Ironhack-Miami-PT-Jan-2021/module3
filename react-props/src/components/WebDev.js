import React, { Component } from "react";

export default class WebDev extends Component {
  state = {
    modules: [1, 2, 3],
    selectedModule: 0,
  };

  moduleDisplay = () => {
    if (this.state.selectedModule === 1) {
      return "In this module you will build a game";
    } else if (this.state.selectedModule === 2) {
      return "You are about to be a Backend developer";
    } else if (this.state.selectedModule === 3) {
      return "React is fun, isn't it?";
    } else {
      return "Please update module";
    }
  };

  incModuleSelection = () => {
    const selectedModule = (this.state.selectedModule + 1) % 4;
    this.setState({
      selectedModule: selectedModule,
    });
  };

  render() {
    return (
      <div>
        <br />
        {this.props.cohortName}
        <button onClick={this.incModuleSelection}>Inc Module</button>
        <h1>{this.moduleDisplay()}</h1>
        <br />
      </div>
    );
  }
}

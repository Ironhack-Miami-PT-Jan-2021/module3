import React from "react";

class Student extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="student">
        <h1>{this.props.myName}</h1>
        <h3>{this.props.position}</h3>
      </div>
    );
  }
}

export default Student;

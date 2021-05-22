import React from "react";
import "./App.css";
import service from "./utils/service";
import Signup from "./components/auth/Signup";

class App extends React.Component {
  async componentDidMount() {
    const responseFromServer = await service.home();
    console.log({ responseFromServer });
    // axios
    //   .fetch("http://localhost:5000")
    //   .then((responseFromServer) => responseFromServer.json())
    //   .then((responseFromServer) => console.log(responseFromServer));
  }

  render() {
    return (
      <div className="App">
        <Signup />
      </div>
    );
  }
}

export default App;

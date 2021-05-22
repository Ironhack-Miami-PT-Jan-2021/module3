import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
// components
import service from "./utils/service";
import Signup from "./components/auth/Signup";
import Celebrities from "./components/celebrities/Celebrities";
import Celebrity from "./components/celebrities/Celebrity";

class App extends React.Component {
  state = {
    // default state, we use empty array to avoid undefined errors
    celebrities: [],
  };
  // componentDidMount is called once when a component is initially rendered(note re-renders from state or prop changes won't re-trigger this)
  async componentDidMount() {
    // we call the getAllCelebrities route from the backend and store the info in the state
    const responseFromServer = await service.getAllCelebrities();
    this.setState({
      // at this point we replace the empty array in state with celbrities from DB, this will also cause a re-render
      celebrities: responseFromServer.data.celebrities,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        {this.state.user.username}
        <Switch>
          {/* a route matching and route starting with /auth/signup, if we want just that route we would add exact */}
          <Route
            path="/auth/signup"
            // render the component and pass props to it, note that this is the prefered way of rendering components
            render={(props) => <Signup {...props} />}
          />
          <Route
            exact
            path="/celebrities"
            render={(props) => (
              <Celebrities {...props} celebrities={this.state.celebrities} />
            )}
          />
          <Route
            path="/celebrities/:id"
            render={(props) => <Celebrity {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

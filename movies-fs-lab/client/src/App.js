import React from "react";
import { Switch } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import ProtectedPage from "./pages/ProtectedPage";
import Signup from "./pages/Signup";
import NormalRoute from "./routing-components/NormalRoute";
import ProtectedRoute from "./routing-components/ProtectedRoute";
import { getLoggedIn, logout } from "./services/auth";
import movieServices from "./services/movie.service";
import * as PATHS from "./utils/paths";
import * as CONSTS from "./utils/consts";
import MoviePage from "./pages/MoviePage";

class App extends React.Component {
  state = {
    user: null,
    isLoading: true,
    movies: [],
  };

  componentDidMount = () => {
    const accessToken = localStorage.getItem(CONSTS.ACCESS_TOKEN);
    if (!accessToken) {
      return this.setState({
        isLoading: false,
      });
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        console.log("RES IN CASE OF FAILURE", res);
        // deal with failed backend call
        return this.setState({
          isLoading: false,
        });
      }
      this.setState({
        user: res.data.user,
        isLoading: false,
      });
    });
    movieServices.getMovies().then((responseFromServer) => {
      this.setState({
        movies: responseFromServer.data.movies,
      });
    });
  };

  removeMovie = (id) => {
    const updatedMovies = this.state.movies.filter((movie) => movie._id !== id);
    this.setState({
      movies: updatedMovies,
    });
  };

  updateMovie = (updatedMovie) => {
    const updatedMovies = this.state.movies.map((movie) =>
      movie._id === updatedMovie._id ? updatedMovie : movie
    );
    this.setState({
      movies: updatedMovies,
    });
  };

  handleLogout = () => {
    const accessToken = localStorage.getItem(CONSTS.ACCESS_TOKEN);
    if (!accessToken) {
      return this.setState({
        user: null,
        isLoading: false,
      });
    }
    this.setState(
      {
        isLoading: true,
      },
      () => {
        logout(accessToken).then((res) => {
          if (!res.status) {
            // deal with error here
            console.error("💡 SOMETHING HAPPENED THAT HAS TO DEALT WITH", res);
          }

          localStorage.removeItem(CONSTS.ACCESS_TOKEN);
          return this.setState({
            isLoading: false,
            user: null,
          });
        });
      }
    );
  };

  authenticate = (user) => {
    this.setState({
      user,
    });
  };

  render() {
    if (this.state.isLoading) {
      return <LoadingComponent />;
    }

    return (
      <div className="App">
        <Navbar handleLogout={this.handleLogout} user={this.state.user} />
        <button onClick={this.removeMovie}>Delete first movie</button>
        <Switch>
          <NormalRoute
            exact
            path={PATHS.HOMEPAGE}
            component={HomePage}
            movies={this.state.movies}
          />
          <NormalRoute
            exact
            path={PATHS.SIGNUPPAGE}
            authenticate={this.authenticate}
            component={Signup}
          />
          {/* <Route
            exact
            path={PATHS.SIGNUPPAGE}
            render={(props) => (
              <Signup {...props} authenticate={this.authenticate} />
            )}
          /> */}
          <NormalRoute
            exact
            path={PATHS.LOGINPAGE}
            authenticate={this.authenticate}
            component={LogIn}
          />
          <NormalRoute
            exact
            path={PATHS.MOVIEPAGE}
            removeMovie={this.removeMovie}
            updateMovie={this.updateMovie}
            component={MoviePage}
          />
          <ProtectedRoute
            exact
            path={PATHS.PROTECTEDPAGE}
            component={ProtectedPage}
            user={this.state.user}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

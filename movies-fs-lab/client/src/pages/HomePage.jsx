import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

class HomePage extends React.Component {
  moviesToDisplay = () =>
    this.props.movies?.map((movie) => (
      <div key={movie._id}>
        <Link to={`/movies/${movie._id}`}>
          <h3>{movie.title}</h3>
        </Link>
        <img src={movie.img} alt={movie.title} height="200px" />
      </div>
    ));

  render() {
    return <div className="App">{this.moviesToDisplay()}</div>;
  }
}

export default HomePage;

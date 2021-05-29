import { moviesInstance } from "../services/movie.service";
import React, { Component } from "react";
import movieServices from "../services/movie.service";

export default class MoviePage extends Component {
  state = {
    editable: false,
  };
  componentDidMount() {
    movieServices
      .getMovie(this.props.match.params.id)
      .then((responseFromServer) => {
        this.setState({
          ...responseFromServer.data.movie,
        });
      });
  }

  handleDelete = () => {
    // we need an id
    const id = this.props.match.params.id;
    //  findByIfAndRemove
    moviesInstance.post(`/${id}/delete`).then((responseFromServer) => {
      if (responseFromServer.status === 200) {
        // update global state
        this.props.removeMovie(id);
        // redirect back to homepage(app)
        this.props.history.push("/");
      }
    });
  };

  handleEdit = () => {
    this.setState({
      editable: !this.state.editable,
    });
  };

  changeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };

  submitEdit = () => {
    // send the state to the backend via axios/service
    const id = this.props.match.params.id;
    const { title, genre, plot, img } = this.state;
    movieServices
      .updateMovie(id, { title, genre, plot, img })
      .then((responseFromServer) => {
        // this.props.history.push("/");
        this.props.updateMovie(responseFromServer.data.movie);
        this.setState({
          editable: false,
        });
      });
  };

  render() {
    const { title, genre, plot, img, editable } = this.state;
    return (
      <div>
        {!editable ? (
          <>
            <h3>{title}</h3>
            <h5>{genre}</h5>
            <p>{plot}</p>
            <img src={img} alt={title} height="200px" />
          </>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={title}
                onChange={this.changeHandler}
              />
            </label>
            <label>
              Genre:
              <input
                type="text"
                name="genre"
                value={genre}
                onChange={this.changeHandler}
              />
            </label>

            <label>
              Plot:
              <input
                type="text"
                name="plot"
                value={plot}
                onChange={this.changeHandler}
              />
            </label>

            <label>
              Image:
              <input
                type="text"
                name="img"
                value={img}
                onChange={this.changeHandler}
              />
            </label>
          </div>
        )}

        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <button onClick={this.handleDelete}>Delete</button>
          <button onClick={this.handleEdit}>Edit</button>
          {editable && <button onClick={this.submitEdit}>Submit Change</button>}
        </div>
      </div>
    );
  }
}

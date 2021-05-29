import axios from "axios";
import * as CONSTS from "../utils/consts";

// creates a basic url for every request in this file
export const moviesInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/movies`,
});

const moviesServices = {
  getMovies: () =>
    moviesInstance.get("/").then((responseFromServer) => responseFromServer),
  getMovie: (movieID) =>
    moviesInstance
      .get(`/${movieID}`)
      .then((responseFromServer) => responseFromServer),
  // delete movies function
  deleteMovie: (id) =>
    moviesInstance
      .post(`/${id}/delete`)
      .then((responseFromServer) => responseFromServer),
  updateMovie: (id, movieData) =>
    moviesInstance
      .post(`/${id}/edit`, movieData)
      .then((responseFromServer) => responseFromServer),
};

export default moviesServices;

import axios from "axios";

// create a new instance of axios for which all the routes are pointing to the baseURL
// withCredentials allows us to convey cookie information from and to the server
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const service = {
  // signup: async (userCredentials) =>
  //   await axiosInstance.post("/auth/signup", userCredentials),
  // home: async () => await axiosInstance.get("/"),
  // isAuthenticated: async () => await axiosInstance.get("/auth/isAuthenticated"),
  // get info for all the celebrities
  getAllCelebrities: async () => await axiosInstance.get("/celebrities"),
  // get info about specific celebrity based on id
  getCelebrityInfo: async (id) => await axiosInstance.get(`/celebrities/${id}`),
};

export default service;

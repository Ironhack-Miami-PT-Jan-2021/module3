import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

const service = {
  signup: async (userCredentials) =>
    await axiosInstance.post("/auth/signup", userCredentials),
  home: async () => await axiosInstance.get("/"),
};

export default service;

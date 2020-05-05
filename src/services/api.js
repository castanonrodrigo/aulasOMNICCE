import axios from "axios";

const api = axios.create({
  baseURL: "https://fluxofullstack.herokuapp.com/",
});

export default api;

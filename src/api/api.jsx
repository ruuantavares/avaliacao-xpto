import axios from "axios";

const api = axios.create({
  baseUrl: "http://numbersapi.com/",
});
export default api;

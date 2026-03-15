import axios from "axios";

const API = axios.create({
  baseURL: "https://vercel-backened.onrender.com/api"
});

export default API;
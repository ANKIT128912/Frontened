import axios from "axios";

const API = axios.create({
  baseURL: "https://vercel-backend.onrender.com/api"
});

export default API;
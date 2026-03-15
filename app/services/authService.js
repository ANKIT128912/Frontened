import axios from "axios";

const API = "https://vercel-backened.onrender.com/api/auth";

export const loginUser = async (data) => {
  const res = await axios.post(`${API}/login`, data);

  localStorage.setItem("token", res.data.token);
  localStorage.setItem("name", res.data.name);

  return res.data;
};

export const signupUser = async (data) => {
  const res = await axios.post(`${API}/signup`, data);
  return res.data;
};
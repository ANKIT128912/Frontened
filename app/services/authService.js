import API from "./api";

export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);

  localStorage.setItem("token", res.data.token);
  localStorage.setItem("name", res.data.name);

  return res.data;
};

export const signupUser = async (data) => {
  const res = await API.post("/auth/signup", data);
  return res.data;
};
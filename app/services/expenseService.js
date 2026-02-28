import axios from "axios";

const API = "http://localhost:5000/api/expense";

export const addExpense = async (expenseData) => {
  const token = localStorage.getItem("token");

  const res = await axios.post(`${API}/add`, expenseData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const getExpenses = async () => {
  const token = localStorage.getItem("token");

  const res = await axios.get(`${API}/get`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
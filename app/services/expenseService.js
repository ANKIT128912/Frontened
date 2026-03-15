import axios from "axios";

const API = "https://vercel-backened.onrender.com/api/expenses";

// Add Expense
export const addExpense = async (expenseData) => {
  const token = localStorage.getItem("token");

  const res = await axios.post(`${API}/add`, expenseData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

// Get Expenses
export const getExpenses = async () => {
  const token = localStorage.getItem("token");

  const res = await axios.get(API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
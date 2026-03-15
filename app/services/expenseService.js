import axios from "axios";

// Your deployed backend URL
const API = "https://vercel-backened.onrender.com/api/expenses";

// Add Expense
export const addExpense = async (expenseData) => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.post(`${API}/add`, expenseData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;

  } catch (error) {
    console.log(error.response?.data);
    throw error;
  }
};

// Get Expenses
export const getExpenses = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.get(`${API}/get`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;

  } catch (error) {
    console.log(error.response?.data);
    throw error;
  }
};
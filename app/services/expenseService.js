import API from "./api";

// Add Expense
export const addExpense = async (expenseData) => {
  const token = localStorage.getItem("token");

  const res = await API.post("/expenses/add", expenseData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

// Get Expenses
export const getExpenses = async () => {
  const token = localStorage.getItem("token");

  const res = await API.get("/expenses", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
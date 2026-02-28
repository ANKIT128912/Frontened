"use client";

import { useState } from "react";
import API from "../services/api";

export default function AddExpense(){

const [amount,setAmount]=useState("");
const [category,setCategory]=useState("");
const [note,setNote]=useState("");

const addExpense=async()=>{

const token=localStorage.getItem("token");

await API.post("/expense/add",

{amount,category,note},

{headers:{Authorization:`Bearer ${token}`}}

);

alert("Expense Added");

};

return(

<div className="container">

<div className="card">

<h2>Add Expense</h2>

<input
placeholder="Amount"
onChange={(e)=>setAmount(e.target.value)}
/>

<br/>

<input
placeholder="Category"
onChange={(e)=>setCategory(e.target.value)}
/>

<br/>

<input
placeholder="Note"
onChange={(e)=>setNote(e.target.value)}
/>

<br/>

<button onClick={addExpense}>Add Expense</button>

</div>

</div>

);

}
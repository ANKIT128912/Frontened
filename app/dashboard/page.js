"use client";

import { useEffect,useState } from "react";
import API from "../services/api";

export default function Dashboard(){

const [expenses,setExpenses]=useState([]);

useEffect(()=>{

const fetchExpenses=async()=>{

const token=localStorage.getItem("token");

const res=await API.get("/expense",{
headers:{Authorization:`Bearer ${token}`}
});

setExpenses(res.data);

};

fetchExpenses();

},[]);

return(

<div className="container">

<h1>Dashboard</h1>

<div className="card">

<h2>Total Expenses</h2>

<p>₹ {expenses.reduce((a,b)=>a+b.amount,0)}</p>

</div>

{expenses.map((e)=>(

<div className="card" key={e._id}>

<h3>{e.category}</h3>

<p>Amount: ₹{e.amount}</p>

<p>{e.note}</p>

</div>

))}

</div>

);

}
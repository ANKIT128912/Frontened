"use client";

import { useState } from "react";
import API from "../services/api";

export default function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const login=async()=>{

const res=await API.post("/auth/login",{email,password});

localStorage.setItem("token",res.data.token);

window.location.href="/dashboard";

};

return(

<div className="container">

<div className="card">

<h2>Login</h2>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<br/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<br/>

<button onClick={login}>Login</button>

</div>

</div>

);

}
"use client";

import { useState } from "react";
import API from "../services/api";

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {

      await API.post("/auth/signup", {
        name,
        email,
        password
      });

      alert("Account Created Successfully");

    } catch (error) {
      alert("Signup Failed");
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "40px" }}>

      <h1>Signup</h1>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={signup}>Signup</button>

    </div>
  );
}

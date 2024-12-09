import React, { useState } from "react";
import axios from "axios";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:50001/api/auth/${isSignup ? "register" : "login"}`;
    const { data } = await axios.post(url, form);
    alert(data.message || "Success");
  };

  return (
    <form onSubmit={handleSubmit}>
      {isSignup && <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />}
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
      <button type="button" onClick={() => setIsSignup(!isSignup)}>
        Switch to {isSignup ? "Login" : "Sign Up"}
      </button>
    </form>
  );
};

export default Auth;

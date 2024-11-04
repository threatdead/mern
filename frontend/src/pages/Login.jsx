import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import lock from "../assets/lock.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email) {
      setError("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (!password) {
      setError("Password is required");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const loginUser = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error message

    if (!validateForm()) {
      return; // Stop if form validation fails
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to login. Please try again.");
        return;
      }

      console.log("Login successful:", data.user);
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.message);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1> Welcome back!</h1>
        <p>Login to continue</p>
      </div>
      <div className="login-form">
        <form onSubmit={loginUser}>
          {error && <p className="error-message">{error}</p>}
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="login-footer">
            <p>
              Don't have an account? <Link to="/register">Sign up</Link>
            </p>
            <Link to="/">
              <img src={lock} alt="lock" />
              Forgot Password?
            </Link>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

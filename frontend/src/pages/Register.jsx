import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    if (!name.trim()) {
      setError("Full name is required");
      return false;
    }
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    setError(""); // Clear any previous error
    return true;
  };

  const registerUser = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop if form validation fails
    }

    const formData = { name, email, password };

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to register. Please try again.");
        return;
      }

      setSuccessMessage("Registration successful! Please log in.");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Network error:", error.message);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-header">
        <h1>Welcome to Claim Manager</h1>
        <p>Register now to submit a claim</p>
      </div>
      <div className="register-form">
        <form onSubmit={registerUser}>
          {error && <p className="error-message">{error}</p>}
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}

          <label>Full Name</label>
          <input
            type="text"
            id="full-name"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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

          <div className="register-footer">
            <p>
              Already have an Account? <Link to="/login">Login</Link>
            </p>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

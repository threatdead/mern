import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import lock from "../assets/lock.png";
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1> Welcome back!</h1>
        <p>Login to continue</p>
      </div>
      <div className="login-form">
        <form>
          <label>Email</label>
          <input type="email" placeholder="Email" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
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

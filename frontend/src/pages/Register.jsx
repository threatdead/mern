import React from "react";
import { Link } from "react-router-dom";
import "../styles/register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-header">
        <h1>Welcome to Claim Manager</h1>
        <p>Register now to submit a claim</p>
      </div>
      <div className="register-form">
        <form>
          <label>Email</label>
          <input type="email" placeholder="Email" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <div class="input-container">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" placeholder="First name" />
          </div>
          <div class="input-container">
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" placeholder="Last name" />
          </div>
          <div class="register-footer">
            <p>
              Already have an Account? <Link to="/login">Login</Link>
            </p>
          </div>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

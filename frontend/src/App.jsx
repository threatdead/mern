import React from "react";
import Navbar from "./components/Navbar";
import "./styles/global.css";

const App = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div className="container">
        <h1>Welcome to the Claim Management System</h1>
        <p>
          Welcome to Claim Manager, an all-in-one web application built to
          streamline the process of submitting, tracking, and managing insurance
          claims. With an intuitive user interface, users can easily register,
          log in, and access their personalized dashboard to submit new claims,
          view claim statuses, and update details as needed. Each claim is
          securely linked to the user’s account, maintaining privacy and
          accuracy. For convenience, Claim Manager offers a responsive design
          and a dark mode option, providing an accessible experience across
          devices.
        </p>

        <p>
          Built with the MERN stack—MongoDB, Express, React, and Node.js—Claim
          Manager is both robust and secure. The backend API, powered by Node.js
          and Express, utilizes JSON Web Tokens (JWT) to ensure that only
          authenticated users have access to their data, while MongoDB stores
          user and claim information efficiently. React, along with custom CSS,
          powers the frontend, creating a responsive, modern interface with
          real-time feedback through client-side validation. This project was
          developed with a focus on security, usability, and scalability, making
          Claim Manager a reliable and efficient tool for insurance claim
          management.
        </p>
      </div>
    </div>
  );
};

export default App;

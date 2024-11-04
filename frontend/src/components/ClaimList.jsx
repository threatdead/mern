import React, { useState } from "react";
import "../styles/claims.css";
import { Link } from "react-router-dom";

const ClaimList = () => {
  // Sample data for demonstration
  const [claims, setClaims] = useState([
    {
      id: 1,
      name: "John Doe",
      status: "Pending",
      policy: "Aetna Advantage - 60054",
      dob: "1980-05-10",
      serviceDate: "2024-11-01",
    },
    {
      id: 2,
      name: "Jane Smith",
      status: "Approved",
      policy: "United Healthcare - 87726",
      dob: "1990-03-22",
      serviceDate: "2024-11-02",
    },
    {
      id: 3,
      name: "Alex Johnson",
      status: "Denied",
      policy: "Blue Cross Blue Shield - 12345",
      dob: "1975-08-15",
      serviceDate: "2024-11-03",
    },
  ]);

  const handleEdit = (id) => {
    alert(`Edit claim with ID: ${id}`);
    // Add your edit logic here
  };

  const handleDelete = (id) => {
    const updatedClaims = claims.filter((claim) => claim.id !== id);
    setClaims(updatedClaims);
  };

  return (
    <div>
      <table className="claim-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Policy</th>
            <th>Date of Birth</th>
            <th>Service Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim) => (
            <tr key={claim.id}>
              <td>{claim.name}</td>
              <td>
                <span className={`status ${claim.status.toLowerCase()}`}>
                  {claim.status}
                </span>
              </td>
              <td>{claim.policy}</td>
              <td>{claim.dob}</td>
              <td>{claim.serviceDate}</td>
              <td>
                <button onClick={() => handleEdit(claim.id)}>Edit</button>
                <button onClick={() => handleDelete(claim.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClaimList;

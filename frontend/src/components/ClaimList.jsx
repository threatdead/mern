import React, { useEffect, useState } from "react";
import "../styles/claims.css";

const ClaimList = ({ enableActions = true }) => {
  const [claims, setClaims] = useState([]);
  const [error, setError] = useState("");

  // Fetch claims on component mount
  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:5000/api/claims", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          setError(data.message || "Failed to fetch claims.");
          return;
        }

        setClaims(data);
      } catch (error) {
        setError("An error occurred. Please try again.");
        console.error("Fetch claims error:", error.message);
      }
    };

    fetchClaims();
  }, []);

  // Edit claim status
  const handleEdit = async (id) => {
    const updatedStatus = prompt(
      "Enter new status (Pending, Approved, Denied):"
    );
    if (!updatedStatus) return;

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`http://localhost:5000/api/claims/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: updatedStatus }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Failed to update claim.");
        return;
      }

      setClaims((prevClaims) =>
        prevClaims.map((claim) =>
          claim._id === id ? { ...claim, status: updatedStatus } : claim
        )
      );
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Edit claim error:", error.message);
    }
  };

  // Delete claim
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`http://localhost:5000/api/claims/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || "Failed to delete claim.");
        return;
      }

      setClaims((prevClaims) => prevClaims.filter((claim) => claim._id !== id));
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Delete claim error:", error.message);
    }
  };

  return (
    <div>
      <h2>Your Claims</h2>
      {error && <p className="error-message">{error}</p>}
      <table className="claim-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Policy</th>
            <th>Date of Birth</th>
            <th>Service Date</th>
            {enableActions && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {claims.map((claim) => (
            <tr key={claim._id}>
              <td>{claim.patientName}</td>
              <td>
                <span
                  className={`claims-status ${claim.status?.toLowerCase()}`}
                >
                  {claim.status}
                </span>
              </td>
              <td>{claim.insurancePolicyNumber}</td>
              <td>{claim.dateOfBirth}</td>
              <td>{claim.dateOfService}</td>
              {enableActions && (
                <td>
                  <button
                    className="claims-edit-button"
                    onClick={() => handleEdit(claim._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="claims-delete-button"
                    onClick={() => handleDelete(claim._id)}
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClaimList;

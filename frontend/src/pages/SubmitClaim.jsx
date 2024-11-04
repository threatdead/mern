import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/submit.css";

const SubmitClaim = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    dateOfBirth: "",
    insurancePolicyNumber: "",
    relationshipToInsured: "self",
    primaryInsuranceName: "cigna",
    dateOfService: "",
    diagnosisCode: "",
    procedureCode: "",
    totalCharge: "",
    amountPaid: "",
    status: "Pending",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:5000/api/claims/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        setMessage("Error submitting claim. Please try again.");
        return;
      }

      setMessage("Claim submitted successfully!");
      setFormData({
        patientName: "",
        dateOfBirth: "",
        insurancePolicyNumber: "",
        relationshipToInsured: "self",
        primaryInsuranceName: "cigna",
        dateOfService: "",
        diagnosisCode: "",
        procedureCode: "",
        totalCharge: "",
        amountPaid: "",
      });
    } catch (error) {
      console.error("Error submitting claim:", error);
      setMessage("Error submitting claim. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <h2 className="submit-form-header">Submit a Claim</h2>

      {message && <p className="submit-form-message">{message}</p>}

      <form className="submit-form-container" onSubmit={handleSubmit}>
        <label className="submit-form-label">Patient's Full Name</label>
        <input
          className="submit-form-input"
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          required
        />

        <label className="submit-form-label">Date of Birth</label>
        <input
          className="submit-form-input"
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />

        <label className="submit-form-label">Insurance Policy Number</label>
        <input
          className="submit-form-input"
          type="text"
          name="insurancePolicyNumber"
          value={formData.insurancePolicyNumber}
          onChange={handleChange}
          required
        />

        <label className="submit-form-label">Relationship to Insured</label>
        <select
          className="submit-form-select"
          name="relationshipToInsured"
          value={formData.relationshipToInsured}
          onChange={handleChange}
          required
        >
          <option value="self">Self</option>
          <option value="spouse">Spouse</option>
          <option value="child">Child</option>
          <option value="other">Other</option>
        </select>

        <label className="submit-form-label">Primary Insurance Name</label>
        <select
          className="submit-form-select"
          name="primaryInsuranceName"
          value={formData.primaryInsuranceName}
          onChange={handleChange}
          required
        >
          <option value="cigna">Cigna</option>
          <option value="blueCross">Blue Cross Blue Shield</option>
          <option value="aetna">Aetna</option>
          <option value="unitedHealthcare">UnitedHealthcare</option>
          <option value="other">Other</option>
        </select>

        <label className="submit-form-label">Date of Service</label>
        <input
          className="submit-form-input"
          type="date"
          name="dateOfService"
          value={formData.dateOfService}
          onChange={handleChange}
          required
        />

        <label className="submit-form-label">Diagnosis Code</label>
        <input
          className="submit-form-input"
          type="text"
          name="diagnosisCode"
          value={formData.diagnosisCode}
          onChange={handleChange}
          required
        />

        <label className="submit-form-label">Procedure Code</label>
        <input
          className="submit-form-input"
          type="text"
          name="procedureCode"
          value={formData.procedureCode}
          onChange={handleChange}
          required
        />

        <label className="submit-form-label">Total Charge</label>
        <input
          className="submit-form-input"
          type="number"
          name="totalCharge"
          value={formData.totalCharge}
          onChange={handleChange}
          required
        />

        <label className="submit-form-label">Amount Paid</label>
        <input
          className="submit-form-input"
          type="number"
          name="amountPaid"
          value={formData.amountPaid}
          onChange={handleChange}
          required
        />

        <button className="submit-button" type="submit">
          Submit Claim
        </button>
      </form>
    </div>
  );
};

export default SubmitClaim;

import React from "react";
import Navbar from "../components/Navbar";
import "../styles/submit.css";
const SubmitClaim = () => {
  return (
    <div>
      <Navbar />
      <h2> Submit a Claim</h2>

      <form>
        <label>Patient's Full Name</label>
        <input type="text" name="patientName" />

        <label>Date of Birth</label>
        <input type="date" name="dateOfBirth" />

        <label>Insurance Policy Number</label>
        <input type="text" name="insurancePolicyNumber" />

        <label>Relationship to Insured</label>
        <select name="relationshipToInsured">
          <option value="self">Self</option>
          <option value="spouse">Spouse</option>
          <option value="child">Child</option>
          <option value="other">Other</option>
        </select>

        <label>Primary Insurance Name</label>
        <select name="primaryInsuranceName">
          <option value="cigna">Cigna</option>
          <option value="blueCross">Blue Cross Blue Shield</option>
          <option value="aetna">Aetna</option>
          <option value="unitedHealthcare">UnitedHealthcare</option>
          <option value="other">Other</option>
        </select>

        <label>Date of Service</label>
        <input type="date" name="dateOfService" />

        <label>Diagnosis Code</label>
        <input type="text" name="diagnosisCode" />

        <label>Procedure Code</label>
        <input type="text" name="procedureCode" />

        <label>Total Charge</label>
        <input type="number" name="totalCharge" />

        <label>Amount Paid</label>
        <input type="number" name="amountPaid" />

        <label>Provider's Name</label>
        <input type="text" name="providerName" />

        <label>Provider's NPI Number</label>
        <input type="text" name="providerNpiNumber" />

        <button type="submit">Submit Claim</button>
      </form>
    </div>
  );
};

export default SubmitClaim;

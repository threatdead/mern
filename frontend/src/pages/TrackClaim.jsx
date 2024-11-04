import React from "react";
import Navbar from "../components/Navbar";
import "../styles/track.css";
import ClaimList from "../components/ClaimList";
const TrackClaim = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h2> Here is a list of all your Claims</h2>
      </div>
      <ClaimList />
    </div>
  );
};

export default TrackClaim;

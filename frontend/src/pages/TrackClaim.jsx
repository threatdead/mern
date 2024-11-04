import React from "react";
import Navbar from "../components/Navbar";
import ClaimList from "../components/ClaimList";

const TrackClaim = () => {
  return (
    <div>
      <Navbar />
      <ClaimList enableActions={true} /> {/* Pass enableActions as needed */}
    </div>
  );
};

export default TrackClaim;

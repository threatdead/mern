import Claim from "../models/claim.model.js";
import jwt from "jsonwebtoken";

// Helper function to extract the user ID from the JWT
const getUserIdFromToken = (req) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new Error("Authorization header missing");
    const token = authHeader.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    return decodedToken.userId;
};

// Submit a new claim
export const submitClaim = async (req, res) => {
    try {
        const userId = getUserIdFromToken(req);

        const newClaim = new Claim({
            ...req.body,
            user: userId,
        });

        await newClaim.save();
        res.status(201).json({ message: "Claim submitted successfully", claim: newClaim });
    } catch (error) {
        if (error.message === "Authorization header missing") {
            res.status(401).json({ message: "Unauthorized" });
        } else {
            console.error("Error submitting claim:", error.message);
            res.status(500).json({ message: "Internal server error" });
        }
    }
};

// Get all claims for the logged-in user
export const getClaims = async (req, res) => {
    try {
        const userId = getUserIdFromToken(req);

        const claims = await Claim.find({ user: userId });
        res.status(200).json(claims);
    } catch (error) {
        if (error.message === "Authorization header missing") {
            res.status(401).json({ message: "Unauthorized" });
        } else {
            console.error("Error fetching claims:", error.message);
            res.status(500).json({ message: "Internal server error" });
        }
    }
};

// Update a specific claim for the logged-in user
export const updateClaim = async (req, res) => {
    try {
        const userId = getUserIdFromToken(req);
        const { id } = req.params;

        // Ensure the claim belongs to the logged-in user
        const claim = await Claim.findOne({ _id: id, user: userId });
        if (!claim) {
            return res.status(404).json({ message: "Claim not found or unauthorized" });
        }

        // Update claim data
        Object.assign(claim, req.body);
        await claim.save();

        res.status(200).json({ message: "Claim updated successfully", claim });
    } catch (error) {
        if (error.message === "Authorization header missing") {
            res.status(401).json({ message: "Unauthorized" });
        } else {
            console.error("Error updating claim:", error.message);
            res.status(500).json({ message: "Internal server error" });
        }
    }
};

// Delete a specific claim for the logged-in user
export const deleteClaim = async (req, res) => {
    try {
        const userId = getUserIdFromToken(req);
        const { id } = req.params;

        // Ensure the claim belongs to the logged-in user
        const claim = await Claim.findOneAndDelete({ _id: id, user: userId });
        if (!claim) {
            return res.status(404).json({ message: "Claim not found or unauthorized" });
        }

        res.status(200).json({ message: "Claim deleted successfully" });
    } catch (error) {
        if (error.message === "Authorization header missing") {
            res.status(401).json({ message: "Unauthorized" });
        } else {
            console.error("Error deleting claim:", error.message);
            res.status(500).json({ message: "Internal server error" });
        }
    }
};

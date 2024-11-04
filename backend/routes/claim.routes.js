import express from "express";
import { submitClaim, getClaims, updateClaim, deleteClaim  } from "../controllers/claim.controller.js";
const router = express.Router();
router.post("/submit", submitClaim);
router.get("/", getClaims);
router.put("/:id", updateClaim);
router.delete("/:id", deleteClaim);
export default router;
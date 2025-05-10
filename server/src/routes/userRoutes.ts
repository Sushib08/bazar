import express from "express";

import { protect } from "../middleware/authMiddleware";
import { getProfile, updateProfile } from "../controllers/userController";

const router = express.Router();

router.get("/me", protect, getProfile);
router.put("/update", protect, updateProfile);

export default router;

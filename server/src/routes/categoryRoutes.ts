import express from "express";
import {
  getCategories,
  seedCategories,
} from "../controllers/categoryController";

const router = express.Router();

router.get("/", getCategories);
router.post("/seed", seedCategories); // pour remplir depuis frontend/postman

export default router;

import express from "express";
import { getAllCategories } from "../controllers/categoryController";
import { getProductsByCategory } from "../controllers/productController";

const router = express.Router();

router.get("/", getAllCategories);

router.get("/:slug", getProductsByCategory);

export default router;

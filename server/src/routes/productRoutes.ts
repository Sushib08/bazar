import express from "express";
import {
  getAllProducts,
  getProductsByCategory,
} from "../controllers/productController";

const router = express.Router();

router.get("/category/:categorySlug", getProductsByCategory);
router.get("/", getAllProducts);

export default router;

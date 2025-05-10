import express from "express";
import {
  getAllProducts,
  getProductsByCategory,
  searchProducts,
} from "../controllers/productController";

const router = express.Router();

router.get("/category/:categorySlug", getProductsByCategory);
router.get("/", getAllProducts);
router.get("/search", searchProducts);

export default router;

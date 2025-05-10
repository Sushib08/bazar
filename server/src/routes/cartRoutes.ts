import express from "express";
import {
  getCart,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  clearUserCart,
} from "../controllers/cartController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", protect, getCart);
router.post("/add", protect, addToCart);
router.put("/update", protect, updateQuantity);
router.delete("/remove/:productId", protect, removeFromCart);
router.delete("/clear", protect, clearCart);
router.delete("/clear", protect, clearUserCart);

export default router;

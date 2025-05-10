import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import productRoutes from "./routes/productRoutes";
import cartRoutes from "./routes/cartRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (_, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/products", productRoutes);

export default app;

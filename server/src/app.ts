import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import categoryRoutes from "./routes/categoryRoutes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (_, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);

export default app;

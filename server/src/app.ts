import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (_, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoutes);

export default app;

import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.js";
import bookRoutes from "./routes/books.js";
import reviewsRouter from "./routes/reviews.js";
import { connectDB } from "./database/db.js";

const app = express();
app.use(express.json());

// Routes
app.use("/api", authRoutes);
app.use("/api", bookRoutes);
app.use("/api", reviewsRouter);

// Database connection
connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});

export default app;
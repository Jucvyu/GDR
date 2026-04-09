import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import expenseRoutes from "./routes/expense.routes.js";

dotenv.config({
    path: ".env"
});

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Mongo conectado"))
    .catch(console.log);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor corriendo en puerto", PORT));

export default app;
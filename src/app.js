import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(authRoutes);
export default app;

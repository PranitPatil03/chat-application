import "dotenv/config";
import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { mongooseConnection } from "./services/db.js";
import { authRouter } from "./routes/Auth.js";
import { chatRouter } from "./routes/Chat.js";

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use(cors());

mongooseConnection;

app.use("/auth", authRouter);
app.use("/chat", chatRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

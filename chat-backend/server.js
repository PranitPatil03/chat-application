import "dotenv/config";
import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { mongooseConnection } from "./services/db.js";
import { authRouter } from "./routes/Auth.js";
import { chatRouter } from "./routes/Chat.js";
import { Server } from "socket.io";
import { createServer } from "node:http";
import { userRouter } from "./routes/User.js";
const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());
const server = createServer(app);

mongooseConnection;

app.use("/auth", authRouter);
app.use("/chat", chatRouter);
app.use("/user", userRouter);

const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  socket.on("setup", (userData) => {
    socket.join(userData.id);
    socket.emit("connected");
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

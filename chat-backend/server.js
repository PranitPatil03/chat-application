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
const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());
const server = createServer(app);
const io = new Server();

mongooseConnection;

app.use("/auth", authRouter);
app.use("/chat", chatRouter);

const socketConnected = new Set();

const onConnected = (socket) => {
  console.log(socket.id);
  socketConnected.add(socket.id);

  io.emit("clients-total", socketConnected.size);

  socket.on("disconnect", () => {
    console.log("Socket Disconnected ", socket.id);
    socketConnected.delete(socket.id);
    io.emit("clients-total", socketConnected.size);
  });

  socket.on("send-message", (messageData) => {
    socket.broadcast.emit("chat-message", messageData);
  });

  socket.on("feedback", (data) => {
    socket.broadcast.emit("feedback", data);
  });
};

io.on("connection", onConnected);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

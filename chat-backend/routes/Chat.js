import express from "express";
import { verifyJWT } from "../Middleware/VerifyUser.js";
import { userStatus } from "../controllers/Chat.js";

export const chatRouter = express.Router();
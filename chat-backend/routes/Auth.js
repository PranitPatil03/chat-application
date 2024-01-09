import express from "express";
import User from "../model/User.js";
import { createUser } from "../controllers/Auth.js";

export const authRouter = express.Router();

authRouter.post("/signup", createUser);

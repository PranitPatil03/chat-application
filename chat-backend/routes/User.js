import express from "express";
import { fetchAllUsers } from "../controllers/User.js";
import  {verifyJWT}  from "../Middleware/VerifyUser.js";

export const userRouter = express.Router();

userRouter.post("/fetchAllUsers", verifyJWT,fetchAllUsers)
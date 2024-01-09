import express from "express";
import  User  from "../model/User"

const router = express.Router();

router.post("/signup", createUser).post("/login", loginUser);

import express from "express";
import {
  getUserByEmail,
  getUsers,
  loginAuth,
} from "../controllers/usersController.js";

export const usersRouter = express.Router();

usersRouter.get("/list", getUsers);
usersRouter.post("/get", getUserByEmail);
usersRouter.post("/auth/login", loginAuth);
// usersRouter.post("/create", createUser);

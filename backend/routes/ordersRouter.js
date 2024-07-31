import express from "express";
import {
  addOrder,
  getOrders,
  getOrderaByUserId,
} from "../controllers/ordersController.js";

export const ordersRouter = express.Router();

ordersRouter.post("/add", addOrder);
ordersRouter.get("/list", getOrders);
ordersRouter.post("/get", getOrderaByUserId);

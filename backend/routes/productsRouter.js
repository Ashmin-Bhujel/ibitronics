import express from "express";
import {
  addProduct,
  listProducts,
  getProductWithId,
  deleteProduct,
} from "../controllers/productsController.js";
import multer from "multer";

export const productsRouter = express.Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: "uploads/products",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

productsRouter.post("/add", upload.single("image"), addProduct);
productsRouter.delete("/delete/:id&:image", deleteProduct);
productsRouter.get("/list", listProducts);
productsRouter.get("/get/:id", getProductWithId);

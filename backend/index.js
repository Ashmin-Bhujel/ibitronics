import express from "express";
import "dotenv/config";
import cors from "cors";
import { productsRouter } from "./routes/productsRouter.js";
import { usersRouter } from "./routes/usersRouter.js";

// App config
const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API endpoints
app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello from server of iBitronics.");
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

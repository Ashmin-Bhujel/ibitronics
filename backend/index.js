import express from "express";
import cors from "cors";
import { getUsers, getUser } from "./requestHandlers.js";

const PORT = process.env.SERVER_PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

app.post("/login", async (req, res) => {
  if (req.body.email) {
    const { email } = req.body;
    const user = await getUser(email);
    res.send(user);
  } else {
    res.send([{ message: "Please send a request body!" }]);
  }
});

app.listen(PORT, () => {
  // console.log(`Server Started at http://localhost:${PORT}`);
});

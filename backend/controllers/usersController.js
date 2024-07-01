import { dbPool } from "../config/database.js";

export const getUsers = async (req, res) => {
  try {
    const [rows] = await dbPool.execute(
      "SELECT id, username, fullName FROM users"
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: "No users found" });
    } else {
      return res.status(200).json(rows);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserByEmail = async (req, res) => {
  try {
    const [rows] = await dbPool.execute(
      "SELECT id, username, fullName FROM users WHERE email = ?",
      [req.body.email]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    } else {
      return res.status(200).json(rows[0]);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const loginAuth = async (req, res) => {
  try {
    const [rows] = await dbPool.execute("SELECT * FROM users WHERE email = ?", [
      req.body.email,
    ]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    } else {
      if (rows[0].password === req.body.password) {
        return res.status(200).json({ isAuthenticated: true });
      } else {
        return res.status(401).json({ isAuthenticated: false });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

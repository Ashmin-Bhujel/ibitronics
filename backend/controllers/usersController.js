import { dbPool } from "../config/database.js";

export const getUsers = async (req, res) => {
  try {
    const [rows] = await dbPool.execute(
      "SELECT id, username, fullName, isAdmin FROM users"
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
      "SELECT id, username, fullName, isAdmin FROM users WHERE email = ?",
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

export const createUser = async (req, res) => {
  const { username, fullName, email, password } = req.body;

  try {
    const [rows] = await dbPool.execute(
      "INSERT INTO users (username, fullName, email, password) VALUES (?, ?, ?, ?)",
      [username, fullName, email, password]
    );
    if (rows.affectedRows === 1) {
      return res.status(201).json({ message: "User created successfully" });
    } else {
      return res.status(500).json({ message: "Failed to create user" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const [rows] = await dbPool.execute("DELETE FROM users WHERE email = ?", [
      req.body.email,
    ]);
    if (rows.affectedRows === 1) {
      return res.status(200).json({ message: "User deleted successfully" });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

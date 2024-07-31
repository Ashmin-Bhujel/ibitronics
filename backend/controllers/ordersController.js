import { dbPool } from "../config/database.js";

export const addOrder = async (req, res) => {
  const { userId, cartInfo } = req.body;

  try {
    const [rows] = await dbPool.execute(
      `INSERT INTO orders (userId, cartInfo) VALUES (?, ?)`,
      [userId, cartInfo]
    );

    if (rows.affectedRows === 1) {
      res.status(201).json({ message: "Order placed successfully" });
    } else {
      res.status(400).json({ message: "Failed to place order" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getOrders = async (req, res) => {
  try {
    const [rows] = await dbPool.execute(`SELECT * FROM orders`);

    if (rows.length > 0) {
      res.status(200).json(rows);
    } else {
      res.status(404).json({ message: "No orders found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getOrderaByUserId = async (req, res) => {
  const userId = req.body.userId;

  try {
    const [rows] = await dbPool.execute(
      `SELECT * FROM orders WHERE userId = ?`,
      [userId]
    );

    if (rows.length > 0) {
      res.status(200).json(rows);
    } else {
      res.status(404).json({ message: "No orders found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

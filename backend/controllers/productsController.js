import fs from "fs";
import { dbPool } from "../config/database.js";

export const addProduct = async (req, res) => {
  let imageName = `${req.file.filename}`;
  const {
    category,
    name,
    storage,
    display,
    chip,
    battery,
    os,
    price,
    stockAvailability,
  } = req.body;

  try {
    const [rows] = await dbPool.execute(
      `INSERT INTO products (category, name, storage, display, chip, battery, os, price, stockAvailability, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        category,
        name,
        storage,
        display,
        chip,
        battery,
        os,
        price,
        stockAvailability === "on" ? true : false,
        imageName,
      ]
    );

    if (rows.affectedRows === 1) {
      res.status(201).json({ message: "Product added successfully" });
    } else {
      res.status(400).json({ message: "Failed to add product" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const listProducts = async (req, res) => {
  try {
    const [rows] = await dbPool.execute(`SELECT * FROM products`);

    if (rows.length > 0) {
      res.status(200).json(rows);
    } else {
      res.status(404).json({ message: "No products found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getProductWithId = async (req, res) => {
  try {
    const [rows] = await dbPool.execute(`SELECT * FROM products where id = ?`, [
      req.params.id,
    ]);

    if (rows.length > 0) {
      res.status(200).json(rows);
    } else {
      res.status(404).json({ message: "No product found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

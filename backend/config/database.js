import mysql from "mysql2/promise";
import "dotenv/config";

export const dbPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

if (!dbPool) {
  console.error("Database connection failed");
  process.exit(1);
} else {
  console.log("Database connected");
}

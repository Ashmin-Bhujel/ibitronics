import "dotenv/config";
import mysql from "mysql2/promise";

export const dbPool = mysql.createPool({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASS,
  database: process.env.DBNAME,
});

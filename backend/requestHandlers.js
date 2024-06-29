import { dbPool } from "./database.js";

export async function getUsers() {
  const [users] = await dbPool.execute("select * from users");
  return users;
}

export async function getUser(email) {
  const [user] = await dbPool.execute("select * from users where email = ?", [
    email,
  ]);
  return user;
}

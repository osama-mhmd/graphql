import db from "../db";

const mutations = { addUser, removeUser, updateUser };

async function addUser({ name, email }: { name: string; email: string }) {
  const result = db.run("INSERT INTO users (name, email) VALUES (?, ?)", [
    name,
    email,
  ]);

  return result.lastInsertRowid;
}
async function removeUser({ id }: { id: number }) {
  try {
    db.run("DELETE FROM users WHERE id = ?", [id]);
    return true;
  } catch {
    return false;
  }
}
async function updateUser({
  id,
  name,
  email,
}: {
  id: number;
  name: string;
  email: string;
}) {
  const result = db.run("UPDATE users SET name = ?, email = ? WHERE id = ?", [
    name,
    email,
    id,
  ]);

  return result.lastInsertRowid;
}

export default mutations;

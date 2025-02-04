import db from "../db";

const mutations = { addUser, removeUser, updateUser };

type UserAdditionContent = {
  name: string;
  email: string;
};

async function addUser({
  input: { name, email },
}: {
  input: UserAdditionContent;
}) {
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
  input: { name, email },
}: {
  id: number;
  input: UserAdditionContent;
}) {
  const result = db.run("UPDATE users SET name = ?, email = ? WHERE id = ?", [
    name,
    email,
    id,
  ]);

  return result.lastInsertRowid;
}

export default mutations;

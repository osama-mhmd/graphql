import db from "../db";

const queries = { user, users };

async function user({ id }: { id: number }) {
  const user = db.query("SELECT * FROM users WHERE id = ?").get(id);

  return user;
}

async function users() {
  const users = db.query("SELECT * FROM users");

  return users;
}

export default queries;

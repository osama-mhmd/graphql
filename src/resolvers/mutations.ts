import { openDB } from "../db";

const mutations = { addUser, removeUser, updateUser };

async function addUser() {
  const db = await openDB();

  // add to db
}
async function removeUser() {
  const db = await openDB();

  // remove from db
}
async function updateUser() {
  const db = await openDB();

  // update db
}

export default mutations;

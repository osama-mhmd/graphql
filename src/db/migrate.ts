import { Database } from "bun:sqlite";
import { readFileSync } from "fs";
import { resolve } from "path";

const migrationsFileName = resolve(__dirname, "./migrate.sql");
const query = readFileSync(migrationsFileName, { encoding: "utf8" });

(async () => {
  const db = new Database(process.env.DB_FILE);

  db.exec(query);
  db.close();
})()
  .then(() => console.log("Done Migrating"))
  .catch((e) => console.log("Error Migrating", e));

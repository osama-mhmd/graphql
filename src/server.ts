import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { buildSchema } from "graphql";
import { readFileSync } from "fs";

const schemaFile = readFileSync("./src/schema.gql", "utf-8");

const schema = buildSchema(schemaFile);

const testUser = {
  id: 1,
  name: "Osama",
  email: "me@gmail.com",
};

const root = {
  // queries
  users() {
    return [testUser];
  },
  user({ id }: { id: string }) {
    return testUser;
  },
  // mutations
  // implement mutations
};

const app = express();

// @ts-ignore -> This is not my error. see: https://github.com/graphql/graphql-http/issues/142
app.all("/graphql", createHandler({ schema, rootValue: root }));

app.listen(4000);

console.log("Running a GraphQL API server at http://localhost:4000/graphql");

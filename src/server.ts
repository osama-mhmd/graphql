import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { buildSchema } from "graphql";
import { readFileSync } from "fs";
import { initializedDB } from "./db";
import queries from "./resolvers/queries";
import mutations from "./resolvers/mutations";

const schemaFile = readFileSync("./src/schema.gql", "utf-8");
const schema = buildSchema(schemaFile);
const rootValue = { ...queries, ...mutations };

initializedDB();
const app = express();

// @ts-ignore -> This is not my error. see: https://github.com/graphql/graphql-http/issues/142
app.all("/graphql", createHandler({ schema, rootValue }));

app.listen(4000);

console.log("Running a GraphQL API server at http://localhost:4000/graphql");

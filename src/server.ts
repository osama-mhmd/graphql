import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "graphql";
import { readFileSync } from "fs";

import queries from "./resolvers/queries";
import mutations from "./resolvers/mutations";

const schemaFile = readFileSync("./src/schema.gql", "utf-8");
const schema = buildSchema(schemaFile);
const rootValue = { ...queries, ...mutations };

const server = new ApolloServer({ schema, rootValue });
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`GraphQL server is running at ${url}`);
});

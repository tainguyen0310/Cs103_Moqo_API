import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { json } from "body-parser";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { resolvers, typeDefs } from "./graphql";
const main = async () => {
  const app = express();

  mongoose
    .connect(process.env.MONGO_URI as string, {})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));


// Run apollo server after creating the typedefs and resolvers
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  app.use(
    "/graphql",
    json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    })
  );

  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log(`server started on port ${port}`);
  });
};

main().catch((err) => {
  console.log(err);
});

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import "dotenv/config";
import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import { resolvers, typeDefs } from "./graphql";
import bodyParser from 'body-parser';
import http from 'http';

const main = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  mongoose
    .connect(process.env.MONGO_URI as string, {})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  app.use(
    '/',
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );

  await new Promise<void>((resolve) => httpServer.listen(
    { port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000/`);
};

main().catch((err) => {
  console.log(err);
});
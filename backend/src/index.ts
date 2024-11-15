import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { productTypeDefs } from './schemas/productSchema';
import { productResolvers } from './resolvers/productResolvers';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'
import connectDB from './db';
import { orderTypeDefs } from './schemas/orderSchema';
import { orderResolvers } from './resolvers/orderResolvers';
dotenv.config();

async function startServer() {
  const app = express();
  await connectDB()

  const typeDefs = [productTypeDefs, orderTypeDefs];
  const resolvers = [productResolvers, orderResolvers];
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });


  await server.start();

  app.use(cors())
  app.use(
    '/graphql',
    bodyParser.json(),
    expressMiddleware(server)
  );

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}/graphql`);
  });
}

startServer();

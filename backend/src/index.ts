import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from './schemas/productSchema';
import { resolvers } from './resolvers/productResolvers';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Inicializar el servidor de Apollo
  await server.start();

  // Usar `expressMiddleware` en lugar de `applyMiddleware`
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

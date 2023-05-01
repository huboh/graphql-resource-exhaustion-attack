import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import depthLimit from "graphql-depth-limit";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const port = 4000;
const server = new ApolloServer({
  typeDefs, // our GraphQl schema definition
  resolvers, // schema resolvers
  introspection: true, // enables GraphIQl playground on the port the server is listening on
  validationRules: [
    depthLimit(5)
  ]
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
startStandaloneServer(server, { listen: { port } })
  .then(
    ({ url }) => {
      console.log(`Server listening on: "${url}" 🔥🔥🔥`);
    }
  )
  .catch(
    (error) => {
      console.error(`An error occurred starting the server: ${error.message}`);
    }
  );
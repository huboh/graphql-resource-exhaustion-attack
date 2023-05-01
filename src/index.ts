import typeDefs from './graphql/schema';;
import resolvers from './graphql/resolvers';
import stringSimilarity from "string-similarity";
import { print } from "graphql/language";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const approvedQueries = [
  `
  query CurrentUser($filter: UserPostsFilterInput) {
    me {
      id
      role
      name
      email
      createdAt
      updatedAt
      posts(filter: $filter) {
        id
        title
        content
        updatedAt
        createdAt
        publishedAt
        isPublished
      }
    }
  }
  `
];

const port = 4000;
const server = new ApolloServer({
  typeDefs, // our GraphQl schema definition
  resolvers, // schema resolvers
  introspection: true, // enables GraphIQl playground on the port the server is listening on
  plugins: [
    {
      requestDidStart: async () => ({
        didResolveOperation: async ({ request, document }) => {
          const query = print(document);
          const operation = request.operationName || (document.definitions[0] as any).name?.value || 'unknown';

          // It's possible that the queries are not identical due to differences in whitespace, comments, or other characters.
          // Hence the use of `string-similarity` package
          if (stringSimilarity.findBestMatch(query, approvedQueries).bestMatch.rating < 0.8) {
            throw new Error(`Query "${operation}" not approved.`);
          }
        }
      }),
    }
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
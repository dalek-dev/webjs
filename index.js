const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');




 // Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
    hi: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    hi:() => 'como estás?',
  },
};

const server = new ApolloServer({typeDefs,resolvers});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
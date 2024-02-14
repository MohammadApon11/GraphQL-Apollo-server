const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
startStandaloneServer(server).then(({ url }) => {
  console.log(`server is runnig ${url}`);
});

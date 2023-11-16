const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const typeDefs = require('./schemas');
const resolvers = require('./resolvers');

const TrackAPI = require('./datasources/track-api');
const ChicagoArtAPI = require('./datasources/chicago-art-api')
const DogStatusCodesAPI = require('./datasources/dog-http-status-api')

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;

      return {
        dataSources: {
          trackAPI: new TrackAPI({ cache }),
          chicagoArtAPI: new ChicagoArtAPI({ cache }),
          dogStatusCodesAPI: new DogStatusCodesAPI({ cache })
        },
      };
    },
  });

  console.log(`
    🚀  Server is running
    📭  Query at ${url}
  `);
}

startApolloServer();

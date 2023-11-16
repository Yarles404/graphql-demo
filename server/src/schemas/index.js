const trackSchema = require('./track-schema');
const chicagoArtSchema = require('./chicago-art-schema');
const dogHttpStatusSchema = require('./dog-http-status-schema');
const resolvers = require('../resolvers');
const {makeExecutableSchema } = require('@graphql-tools/schema');

module.exports = makeExecutableSchema ({
    typeDefs : [trackSchema, chicagoArtSchema, dogHttpStatusSchema],
    resolvers
});

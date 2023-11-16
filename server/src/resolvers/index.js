const trackResolvers = require('./track-resolver')
const chicagoArtResolvers = require('./chicago-art-resolver')
const dogStatusCodesResolvers = require('./dog-http-status-resolver')

module.exports = {
    Query: {
        ...trackResolvers.Query,
        ...chicagoArtResolvers.Query,
        ...dogStatusCodesResolvers.Query
    },
    Mutation: {
        ...trackResolvers.Mutation
    },
    Track: {
        ...trackResolvers.Track
    }
}

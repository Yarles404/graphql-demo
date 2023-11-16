const dogStatusCodesResolvers = {
    Query: {
        // get json response for status code
        getDog: (_, {statusCode}, {dataSources}) => {
            return dataSources.dogStatusCodesAPI.getDog(statusCode);
        }
    }
};

module.exports = dogStatusCodesResolvers;

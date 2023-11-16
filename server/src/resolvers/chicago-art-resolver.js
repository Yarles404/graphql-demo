const chicagoArtResolvers = {
  Query: {
    // get filtered art with limit
    searchArt: async (_, {search, limit}, {dataSources}) => {
      const response = await dataSources.chicagoArtAPI.searchArt(search, limit)
      
      return response.data;
    }
  }
};

module.exports = chicagoArtResolvers;

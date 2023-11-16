const { RESTDataSource } = require('@apollo/datasource-rest');

class ChicagoArtAPI extends RESTDataSource {
  baseURL = 'https://api.artic.edu/api/v1/artworks/';

  async searchArt(search, limit) {
    return await this.get('search', {
      params: {
        q: search,
        limit: limit
      }
    });
  }
}

module.exports = ChicagoArtAPI;

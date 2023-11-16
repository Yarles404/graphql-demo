const { RESTDataSource } = require('@apollo/datasource-rest');

class DogStatusCodesAPI extends RESTDataSource {
  // the Catstronauts catalog is hosted on this server
  baseURL = 'https://http.dog/';

  getDog(statusCode) {
    return this.get(`${statusCode}.json`);
  }
}

module.exports = DogStatusCodesAPI;

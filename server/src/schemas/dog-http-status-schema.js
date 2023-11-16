const gql = require('graphql-tag');

const definition = gql`
  type Query {
    "Get image URLs of dog for status code"
    getDog(statusCode: Int = 200): DogHTTPStatus
  }
  
  type ImageFormats {
    avif: String
    jpg: String
    jxl: String
    webp: String
  }
  
  type DogHTTPStatus {
    image: ImageFormats
    status_code: Int
    title: String
    url: String
  }
`;

module.exports = definition;

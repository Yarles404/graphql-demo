const gql = require('graphql-tag');

const definition = gql`
  type Query {
    "Find art using search and limit to filter results"
    searchArt(search: String, limit: Int): [Artwork]
  }
  
  type ArtThumbnail {
    alt_text: String
    width: Int
    lqip: String
    height: Int
  }
  
  type Artwork {
    _score: Float
    thumbnail: ArtThumbnail
    api_model: String
    is_boosted: Boolean
    api_link: String
    id: Int!
    title: String
    timestamp: String
  }
`;

module.exports = definition;

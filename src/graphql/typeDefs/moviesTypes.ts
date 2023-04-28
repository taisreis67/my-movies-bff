import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Movie {
    id: Int
    title: String
  }

  type Movies {
    movies: [Movie]
  }

  extend type Query {
    movies(): [Movie] 
  }

  extend type Query {
    productCompany(id: Int!): ProductCompany 
  }
`;
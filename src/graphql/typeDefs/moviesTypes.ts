import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Movie {
    id: Int
    title: String
    productionCompanies: [ProductionCompany]
  }

  type ProductionCompany {
    id: Int
    name: String
    originCountry: String
  }

  extend type Query {
    movie(id: Int!): Movie
    movies: [Movie] 
  }
`;
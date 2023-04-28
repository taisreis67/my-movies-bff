import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type ProductCompany {
    id: Int
    name: String
    homepage: String
  }

  extend type Query {
    productCompany(id: Int!): ProductCompany 
  }
`;
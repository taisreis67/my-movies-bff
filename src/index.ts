import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from '@apollo/federation';
import { gql } from 'apollo-server-express';
import axios from 'axios';

const typeDefs = `#graphql
  type Movie {
    id: Int
    title: String
    productionCompany: [ProductionCompany]
  }

  type ProductionCompany {
    id: Int
    name: String
    homepage: String
  }

  type Query {
    movie(id: Int!): Movie
    movies: [Movie]
  }
`;

const URL = 'https://api.themoviedb.org/3';
const TOKEN = '16d5d710a1d2df0d971d0f77f928af7e';

const resolvers = {
  Query: {
    movies: async () => { 
      const moviesResponse = await axios.get(`${URL}/movie/popular?page=1&api_key=${TOKEN}`);
      const movies = moviesResponse.data.results;

      for (const movie of movies) {
        const movieResponse = await axios.get(`${URL}/movie/${movie.id}?api_key=${TOKEN}`);
        const productsCompanies = movieResponse.data.production_companies;

        for (const productsCompany of productsCompanies) {
          const productCompanyResponse = await axios.get(`${URL}/company/${productsCompany.id}?api_key=${TOKEN}`);
          movie.productionCompany.push(productCompanyResponse.data);
        }
      }

      return movies;
    },
    movie: async (_: any, { id }: { id: number }) => { 
      const movieResponse = await axios.get(`${URL}/movie/${id}?api_key=${TOKEN}`);
      const movie = movieResponse.data;
      const productsCompanies = movie.production_companies;
      console.log(movie);

      for (const productsCompany of productsCompanies) {
        const productCompanyResponse = await axios.get(`${URL}/company/${productsCompany.id}?api_key=${TOKEN}`);
        movie.productionCompany.push(productCompanyResponse.data);
      }

      return movie;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 3000 },
});

console.log(`🚀 Server ready at: ${url}`);
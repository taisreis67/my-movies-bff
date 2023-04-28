import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import axios from 'axios';
import humps from 'humps';

const typeDefs = `#graphql
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
        movie.production_companies = movieResponse.data.production_companies;
      }

      return humps.camelizeKeys(movies);
    },
    movie: async (_: any, { id }: { id: number }) => { 
      const movieResponse = await axios.get(`${URL}/movie/${id}?api_key=${TOKEN}`);
      return humps.camelizeKeys(movieResponse.data);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 3000 },
});

console.log(`🚀 Server ready at: ${url}`);
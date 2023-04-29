import humps from 'humps';
import { Movies as MoviesDataSource } from '../../datasources/index.js';

export const resolvers = {
  Query: {
    movies: async () => { 
      const moviesDataSource = new MoviesDataSource();
      const movies = await moviesDataSource.getMoviesList({ page: 1 });

      for (const movie of movies) {
        const movieDetail = await moviesDataSource.getMovie({ id: movie.id });
        movie.production_companies = movieDetail.production_companies;
      }

      return humps.camelizeKeys(movies);
    },
    movie: async (_: any, { id }: { id: number }) => { 
      const moviesDataSource = new MoviesDataSource();
      const movie = await moviesDataSource.getMovie({ id });
      return humps.camelizeKeys(movie);
    },
  },
};
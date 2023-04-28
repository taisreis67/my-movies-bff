import { Movies as MovieDataSource, ProductionCompany as ProductionCompanyDataSource } from '../../datasources'

export const resolvers = {
  Query: {
    movies: () => { 
      const movieDataSource = new MovieDataSource();
      return movieDataSource.getMoviesList({ page: 1 });
    },
    movie: (_, { id }) => { 
      const movieDataSource = new MovieDataSource();
      return movieDataSource.getMovie({ id });
    },
  },
  Movie: {
    productCompany: (_, { id }) => {
      const productionCompanyDataSource = new ProductionCompanyDataSource();
      return productionCompanyDataSource.getProductionCompany({ id });
    },
  }
};
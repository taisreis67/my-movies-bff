import { ProductionCompany as ProductionCompanyDataSource } from '../../datasources'

export const resolvers = {
  Query: {
    productCompany: (_, { id }) => {
      const productionCompanyDataSource = new ProductionCompanyDataSource();
      return productionCompanyDataSource.getProductionCompany({ id });
    },
  }
};
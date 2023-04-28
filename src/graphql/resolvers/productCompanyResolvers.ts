import { ProductionCompany as ProductionCompanyDataSource } from '../../datasources'

export const resolvers = {
  Query: {
    productCompany: (_: any, { id }: { id: number }) => {
      const productionCompanyDataSource = new ProductionCompanyDataSource();
      return productionCompanyDataSource.getProductionCompany({ id });
    },
  }
};
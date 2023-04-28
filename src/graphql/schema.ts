import { buildSubgraphSchema } from '@apollo/federation';
import { MoviesTypeDefs, ProductionCompanyTypeDefs } from './typeDefs';
import { MoviesResolvers, ProdutionCompanyResolvers } from './resolvers';

export const schema = buildSubgraphSchema([
  { typeDefs: MoviesTypeDefs, resolvers: MoviesResolvers },
  { typeDefs: ProductionCompanyTypeDefs, resolvers: ProdutionCompanyResolvers },
]);
import { buildSubgraphSchema } from '@apollo/federation';
import { MoviesTypeDefs } from './typeDefs';
import { MoviesResolvers } from './resolvers';

export const schema = buildSubgraphSchema([
  { typeDefs: MoviesTypeDefs, resolvers: MoviesResolvers },
]);
import { buildSubgraphSchema } from '@apollo/federation';
import { MoviesTypeDefs } from './typeDefs/index.js';
import { MoviesResolvers } from './resolvers/index.js';

export const schema = buildSubgraphSchema([
  { typeDefs: MoviesTypeDefs, resolvers: MoviesResolvers },
]);
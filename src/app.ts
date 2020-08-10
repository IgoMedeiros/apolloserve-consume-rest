import { ApolloServer } from 'apollo-server';

import schema from './schema';
import { dataSources } from './api';

const server = new ApolloServer({
    schema,
    dataSources
});

export default server;
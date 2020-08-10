import { GraphQLList } from 'graphql';

import { getPerson } from './PersonLoader';
import Person from './PersonType';

export const queries = {
    person: {
        type: GraphQLList(Person),
        resolve: getPerson
    }
};
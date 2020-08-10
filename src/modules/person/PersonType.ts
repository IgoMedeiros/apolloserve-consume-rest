import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
    name: 'Person',
    fields: {
        gender: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: GraphQLString
        },
        phone: {
            type: GraphQLString
        },
        quote: {
            type: GraphQLString
        }
    }
});
const {join} = require('path');
const {addResolversToSchema} = require('@graphql-tools/schema');
const express = require('express');
const {loadSchemaSync} = require('@graphql-tools/load');
const {GraphQLFileLoader} = require('@graphql-tools/graphql-file-loader');
const {graphqlHTTP} = require('express-graphql');
const {fetchSchemaSync} = require('./utils/load.js')

const resolversLoader = require('./resolvers/index')
const repositories = require('./repository/index')


// Load schema from the file
const schema = loadSchemaSync(fetchSchemaSync(join(__dirname, 'schema')), {
    loaders: [
        new GraphQLFileLoader(),
    ]
});

// Write some resolvers
const resolvers = resolversLoader(...repositories);

// Add resolvers to the schema
var schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers,
});
const app = express();
app.use(
    graphqlHTTP({
        schema: schemaWithResolvers,
        graphiql: true,
    })
);

app.listen(4000, () => {
    console.info(`Server listening on http://localhost:4000`)
})
const {join} = require('path');
const {loadSchemaSync} = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const {addResolversToSchema} =require( '@graphql-tools/schema');
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {fetchSchemaFiles} = require('./utils.js')

let files = fetchSchemaFiles(join(__dirname,'schema'));


// Load schema from the file
const schema = loadSchemaSync(files, {
    loaders: [
        new GraphQLFileLoader(),
    ]
});


// Write some resolvers
const resolvers = {};

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
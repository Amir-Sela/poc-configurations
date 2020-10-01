const {join} = require('path');
const {loadSchemaSync} = require('@graphql-tools/load');
const {UrlLoader} =require('@graphql-tools/url-loader');
const {addResolversToSchema} =require( '@graphql-tools/schema');
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
var router = express.Router();

// Load schema from the file
const schema = loadSchemaSync("http://localhost:8888", {
    loaders: [
        new UrlLoader(),
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

app.use("/schema",router);


app.use(
    graphqlHTTP({
        schema: schemaWithResolvers,
        graphiql: true,
    })
);

app.listen(4000, () => {
    console.info(`Server listening on http://localhost:4000`)
})
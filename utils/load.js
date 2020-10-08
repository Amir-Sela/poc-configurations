const {loadFilesSync} = require('@graphql-tools/load-files');
const {loadSchemaSync} = require('@graphql-tools/load');
const {UrlLoader} = require('@graphql-tools/url-loader');
const request = require('request');
const {GraphQLFileLoader} = require('@graphql-tools/graphql-file-loader');


const fetchSchemaSync = (path) => {
    return loadFilesSync(path, {extensions: ['graphql']});
}



module.exports = {fetchSchemaSync};
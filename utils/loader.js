const fs = require('fs');
const {join} = require('path');
const {mergeResolvers} = require('@graphql-tools/merge');
const {loadFilesSync} = require('@graphql-tools/load-files');

const fetchSchemaFiles = (path) => {
    return loadFilesSync(path, {extensions: ['graphql']});
}
const fetchResolvers = (path) => {
    return mergeResolvers(loadFilesSync(path, {extensions: ['js']}));
}

module.exports = {fetchSchemaFiles, fetchResolvers};
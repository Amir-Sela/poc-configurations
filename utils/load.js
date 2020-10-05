const {loadFilesSync} = require('@graphql-tools/load-files');

const fetchSchemaSync = (path) => {
    return loadFilesSync(path, {extensions: ['graphql']});
}

module.exports = {fetchSchemaSync};
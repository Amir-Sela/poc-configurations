const fs = require('fs');
const {join} = require('path');
const fetchSchemaFiles = (path) => {
    return fs.readdirSync(path).filter(file => file.endsWith(".graphql")).forEach(file => join(path,file));
}

module.exports = {fetchSchemaFiles};
const fs = require('fs');
const {join, basename} = require('path');
const {mergeResolvers} = require('@graphql-tools/merge');
const {loadFilesSync} = require('@graphql-tools/load-files');


const createSchemaWithMetadataFields = (path) => {
    let loadedFiles = []
    let files = fs.readdirSync(path)
    files.filter(file => file.endsWith(".graphql"))
    files.forEach(file => {
        let fullFileName = file.replace(".graphql", "")
        let [typeName, metaData] = fullFileName.split('_');
        let loadedFile = fs.readFileSync(join(path, file), {encoding: 'utf-8'});
        if (typeof metaData !== 'undefined' && metaData && metaData === "md") {
            loadedFile += `\n
                  extend type ${typeName[0].toUpperCase() + typeName.substr(1)} {
                  entityID:String!
                  createdDate:Long!
                  updatedDate:Long!
            }`
        }
        loadedFiles.push(loadedFile)
    })
    return loadedFiles
}

const fetchResolvers = (path) => {
    return mergeResolvers(loadFilesSync(path, {extensions: ['js']}));
}

module.exports = {createSchemaWithMetadataFields, fetchResolvers};
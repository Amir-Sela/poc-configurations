const {generateMetaDataFields} = require("../utils/generate")

var authors = []

function createAuthor(author) {
    authors.push(generateMetaDataFields(author))
    return author
}

function findAuthor(id) {
    return authors.find(author => author["name"] === id)
}

module.exports = {createAuthor, findAuthor}
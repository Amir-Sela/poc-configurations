const {generateMetaDataFields} = require("../utils/generate")

var comments = []

function createComment(comment) {
    comments.push(generateMetaDataFields(comment))
    return comment
}

function findComment(id) {
    return comments.find(comment => comment["entityID"] === id)
}

module.exports = {createComment, findComment}
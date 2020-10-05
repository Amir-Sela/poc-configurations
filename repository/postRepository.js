const {generateMetaDataFields} = require("../utils/generate")

var posts = []

function createPost(post) {
    posts.push(generateMetaDataFields(post))
    return post
}

function findPost(id) {
    return posts.find(post => post["entityID"] === id)
}

module.exports = {createPost, findPost}
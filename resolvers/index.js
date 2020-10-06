const {mergeResolvers} = require('@graphql-tools/merge')
const authorResolver = require('./authorResolver')
const commentResolver = require('./commentResolver')
const postResolver = require('./postResolver')
const scalarsResolver = require('./scalarsResolver')

module.exports = (authorRepository, commentRepository, postRepository) => mergeResolvers(
    [
        authorResolver(authorRepository),
        commentResolver(commentRepository),
        postResolver(postRepository),
        scalarsResolver
    ])
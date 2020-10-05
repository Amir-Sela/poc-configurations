module.exports = (commentRepository) => {
    return {
        Query: {
            findComment(obj, {id}, context, info) {
                return commentRepository.findComment(id)
            }
        },
        Mutation: {
            createComment(obj, args, context, info) {
                return commentRepository.createComment(args)
            }
        }
    }
}
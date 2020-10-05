module.exports = (postRepository) => {
    return {
        Query: {
            findPost(obj, {id}, context, info) {
                return postRepository.findPost(id);
            }
        },
        Mutation: {
            createPost(obj, args, context, info) {
                return postRepository.createPost(args);
            }
        }
    }
}
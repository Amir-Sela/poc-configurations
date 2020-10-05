module.exports = (authorRepository) => {
    return {
        Query: {
            findAuthor(obj, {name}, context, info) {
                return authorRepository.findAuthor(name)
            }
        },
        Mutation: {
            createAuthor(obj, args, context, info) {
                return authorRepository.createAuthor(args);
            }
        }
    }
}
const {generateMetaDataFields}  = require('../utils/generate')
module.exports = (authorRepository) => {
    return {
        Query: {
            findAuthor(obj, {name}, context, info) {
                return generateMetaDataFields({"name":"itay"})
            }
        },
        Mutation: {
            createAuthor(obj, args, context, info) {
                return authorRepository.createAuthor(args);
            }
        },
        Author:{
            name(obj,args,context,info){
                return "lol"
            }
        }
    }
}
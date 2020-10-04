module.exports = {
    Query:{
        findAuthor(obj, args, context, info){
            return {"createdDate":+ new Date()}
        },

    }
}
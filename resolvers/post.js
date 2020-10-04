module.exports = {
    Query:{
        findPost(obj, args, context, info){
            console.log(args)
        }
    },
    Mutation:{
        createPost(obj, args, context, info){
            return {"text": args["postDetails"]["text"]}
        }
    }
}
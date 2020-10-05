# poc-configurations

run those queries(change the id in query after creation with mutation):

mutation create
{
  createPost(text:"hihihihi",tags:["amir you are the king"]){
    entityID
  }
  createComment(text:"hihihihihi",authorID:"aaaaaaa",postID:"bbbbbbbb"){
    entityID
  }
  	createAuthor(name:"itay"){
    entityID,
    createdDate,
    updatedDate
  }
}

query queries
{
  findPost(id:"38fa4070-071e-11eb-849c-55ffaf8ffe6b"){
    createdDate
  },
  findComment(id:"38fa6780-071e-11eb-849c-55ffaf8ffe6b"){
    text
  },
  findAuthor(name:"itay"){
    entityID
  }
}
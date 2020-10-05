const uuid = require('uuid')

generateMetaDataFields = (obj) => {
    obj["createdDate"] = +new Date()
    obj["updatedDate"] = +new Date()
    obj["entityID"] = uuid.v1();
    return obj;
}

module.exports = {generateMetaDataFields}
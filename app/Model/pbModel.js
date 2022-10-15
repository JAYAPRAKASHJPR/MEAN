const mongoose = require("mongoose");
const databases = require('../DB/createConnection')
let pbModel = {};

const lineItemSchema = new mongoose.Schema({
    "userId": Number,
    "id": Number,
    "title": String,
    "completed": Boolean,
    "company": String
})

pbModel.lineItemModel = async () => {
    let db = await databases.dbConnection()
    let doc = await db.model('mock1', lineItemSchema);
    return doc;
}

module.exports = pbModel;
const mongoose = require('mongoose');

exports.dbConnection = async () => {
     return await mongoose.connect('mongodb://localhost:27017/test')
}


const db = require('../db');
const mongoose = db.mongoose;
const Schema = db.Schema;
const usersSchema = new Schema({
    name: {
        type: String,
        default:''
    },
    password: {
        type: String,
        default:''
    }
})
const users = mongoose.model('user',usersSchema);
module.exports = users;

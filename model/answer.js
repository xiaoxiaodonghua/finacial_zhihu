const db = require('../db');
const mongoose = db.mongoose;
const Schema = db.Schema;
const usersSchema = new Schema({
    title: {
        type: String,
        default:'',
    },
    description: {
        type: String,
        default:'',
    },
    like: {
        type: String,
        default:0,
    },
    stamp: {
        type: String,
        default:0,
    },
    date: {
        type: String,
        default: new Date(),
    },
    answer: {
        type: Array,
        default: [],
    }
});
const answer = mongoose.model('answer',usersSchema);
module.exports = answer;

const db = require('../db');
const mongoose = db.mongoose;
const Schema = db.Schema;
const commentsSchema = new Schema({
    id: {
        type: Number,
        default: ''
    },
    uname: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default:''
    },
    content: {
        type: String,
        default: ""
    },
    comments: {
        type: Array,
        default: []
    },
    date: {
        type: String,
        default: new Date()
    }
});
const comments = mongoose.model('comments',commentsSchema);
module.exports = comments;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;//使用内置的promise对象，可以使用then和catch方法
mongoose.connect('mongodb://localhost/Gaodun', {
    useNewUrlParser: true 
});

module.exports = {
    mongoose: mongoose,
    Schema:Schema,
}
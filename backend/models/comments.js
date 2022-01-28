const mongoose = require('mongoose');
      Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    title: String,
    content: String,
    date: { type : Date, default: Date("<YY-mm>") }
});

module.exports = mongoose.model('Comments', CommentsSchema, "comments");
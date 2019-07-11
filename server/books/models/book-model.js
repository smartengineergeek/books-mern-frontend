const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = new Schema(
    {
        name: { type: String, required: true },
        authorName: { type: String, required: true}
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('books', Book);
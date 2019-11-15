const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
    user: {type: String, required: true},
    alias: {type: String, required: true},
    title: {type: String, required: true},
    url: {type: String, required: true},
    stars: {type: Number, required: true},
    image: {type: String},
    comment: {type: String, required: true},
    image: {type: String},
    defaultImage: {type: String},
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = reviews = mongoose.model("Reviews", reviewsSchema);
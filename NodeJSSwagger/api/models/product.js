const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var productSchema = new Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    count: {type: String, required: true},
    reviews: {type: String, required: true}
});

module.exports = mongoose.model('Product', productSchema);
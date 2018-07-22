import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var productSchema = new Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    count: {type: Number, min: 0, required: true},
    reviews: {type: String, required: true}
});

module.exports = mongoose.model('Product', productSchema);
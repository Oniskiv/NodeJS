const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var citySchema = new Schema({
    name: {type: String, required: true},
    country: {type: String, required: true},
    capital: {type: String, required: true},
    location: {
        lat: {type: String, required: true},
        long: {type: String, required: true}
    }
});

module.exports = mongoose.model('City', citySchema);
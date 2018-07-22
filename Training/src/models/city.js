import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var citySchema = new Schema({
    name: {type: String, required: true},
    country: {type: String, required: true},
    capital: {type: Boolean, required: true},
    location: {
        lat: {type: Number, min: -90, max: 90, required: true},
        long: {type: Number, min: -180, max: 180, required: true}
    },
    lastModifiedDate: {type: Date, required: false},
});

module.exports = mongoose.model('City', citySchema);
'use strict';
const csvjson = require("csvjson");
const fs = require('fs');

const options = {
    delimiter: ','
};
const tempProducts = csvjson.toObject(fs.readFileSync('./../data/products.csv', {encoding: 'utf8'}, options));

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Products', tempProducts, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Products', null, {});
    }
};

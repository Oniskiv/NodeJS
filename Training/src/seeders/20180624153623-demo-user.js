'use strict';
const csvjson = require("csvjson");
const fs = require('fs');

const options = {
    delimiter: ','
};
const tempUsers = csvjson.toObject(fs.readFileSync('./../data/users.csv', {encoding: 'utf8'}, options));

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', tempUsers, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};

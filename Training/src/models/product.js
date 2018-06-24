'use strict';
module.exports = (sequelize, DataTypes) => {
    var Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        price: DataTypes.STRING,
        count: DataTypes.INTEGER,
        reviews: DataTypes.STRING
    }, {});
    Product.associate = function (models) {
    };
    return Product;
};
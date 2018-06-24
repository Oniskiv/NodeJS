'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        name: DataTypes.STRING,
        login: DataTypes.STRING,
        password: DataTypes.STRING
    }, {});
    User.associate = function (models) {
    };
    return User;
};
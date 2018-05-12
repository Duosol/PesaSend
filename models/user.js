'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: { type: DataTypes.STRING, unique: true },
        identification_no: DataTypes.INTEGER,
        phone: DataTypes.INTEGER
    }, {});
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};
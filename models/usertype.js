'use strict';
module.exports = (sequelize, DataTypes) => {
    var UserType = sequelize.define('UserType', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        user_type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {});
    UserType.associate = function(models) {
        // associations can be defined here

        UserType.hasMany(models.User);
    };
    return UserType;
};
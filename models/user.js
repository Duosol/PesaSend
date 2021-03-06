'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        // userTypeId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     onDelete: "SET NULL",
        //     onUpdate: "CASCADE",
        //     field: 'user_type_id'
        //         // references: {
        //         //     model: 'UserType',
        //         //     key: 'id'
        //         // }
        // },
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        identification_no: DataTypes.INTEGER,
        phone: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            min: 10
        }
    }, {
        underscored: true
    });
    User.associate = function(models) {
        // associations can be defined here

        // User.belongsTo(models.UserType);
        User.belongsTo(models.UserType, {
            onDelete: "SET NULL",
            foreignKey: {
                fieldName: "user_type_id",
                allowNull: false
            }
        });

        // User.hasMany(models.TransactionDeposit);
    };
    return User;
};
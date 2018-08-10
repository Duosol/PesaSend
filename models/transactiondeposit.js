'use strict';
module.exports = (sequelize, DataTypes) => {
    var TransactionDeposit = sequelize.define('TransactionDeposit', {
        // id: { type: DataTypes.INTEGER, primaryKey: true },
        user_id: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            // onDelete: "CASCADE",
            references: {
                model: 'User',
                key: 'id'
            }
        },
        amount: DataTypes.INTEGER,
        email_from: DataTypes.STRING,
        number_from: DataTypes.INTEGER,
        email_to: DataTypes.STRING,
        number_to: DataTypes.INTEGER
    }, {
        underscored: true
    });
    TransactionDeposit.associate = function(models) {
        // associations can be defined here

        // TransactionDeposit.belongsTo(models.User);

        TransactionDeposit.belongsTo(models.User, {
            onDelete: "SET NULL",
            foreignKey: {
                fieldName: "user_id",
                allowNull: false
            }
        });
    };
    return TransactionDeposit;
};
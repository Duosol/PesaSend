'use strict';
module.exports = (sequelize, DataTypes) => {
  var TransactionDeposit = sequelize.define('TransactionDeposit', {
    amount: DataTypes.INTEGER,
    email_from: DataTypes.STRING,
    number_from: DataTypes.INTEGER,
    email_to: DataTypes.STRING,
    number_to: DataTypes.INTEGER
  }, {});
  TransactionDeposit.associate = function(models) {
    // associations can be defined here
  };
  return TransactionDeposit;
};
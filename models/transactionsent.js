'use strict';
module.exports = (sequelize, DataTypes) => {
  var TransactionSent = sequelize.define('TransactionSent', {
    transaction_escrow_id: DataTypes.INTEGER,
    mpesa_trx: DataTypes.STRING,
    mpesa_ref: DataTypes.STRING,
    amount: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  TransactionSent.associate = function(models) {
    // associations can be defined here
  };
  return TransactionSent;
};
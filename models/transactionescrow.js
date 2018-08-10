'use strict';
module.exports = (sequelize, DataTypes) => {
  var TransactionEscrow = sequelize.define('TransactionEscrow', {
    transaction_deposit_id: DataTypes.INTEGER,
    mpesa_code: DataTypes.STRING,
    mpesa_ref: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    sent: DataTypes.BOOLEAN
  }, {
    underscored: true,
  });
  TransactionEscrow.associate = function(models) {
    // associations can be defined here
  };
  return TransactionEscrow;
};
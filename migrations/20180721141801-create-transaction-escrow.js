'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TransactionEscrows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transaction_deposit_id: {
        type: Sequelize.INTEGER
      },
      mpesa_code: {
        type: Sequelize.STRING
      },
      mpesa_ref: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.INTEGER
      },
      sent: {
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TransactionEscrows');
  }
};
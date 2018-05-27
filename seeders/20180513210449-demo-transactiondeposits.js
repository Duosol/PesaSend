'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('Person', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */

        return queryInterface.bulkInsert('TransactionDeposits', [{
            user_id: 1,
            amount: 23400,
            email_from: 'trial@f.l'
        }, {
            user_id: 3,
            amount: 22000,
            email_from: 'trial@f.l'
        }, {
            user_id: 2,
            amount: 234,
            email_from: 'trial@f.l'
        }]);

    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */

        return queryInterface.bulkDelete('TransactionDeposits', null, {});
    }
};
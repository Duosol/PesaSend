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

        return queryInterface.bulkInsert('Users', [{
            firstname: 'Joe',
            lastname: 'Mfalme',
            email: "jj@j.j",
            user_type_id: 1
        }, {
            firstname: 'Jane',
            lastname: 'Malkia',
            email: "jj1@j.j",
            user_type_id: 2
        }, {
            firstname: 'Jack',
            lastname: 'Joker',
            email: "admin@j.j",
            user_type_id: 3
        }], {})

    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
        return queryInterface.bulkDelete('Users', null, {});

    }
};
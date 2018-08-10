'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('TransactionDeposits', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            amount: {
                type: Sequelize.INTEGER
            },
            email_from: {
                type: Sequelize.STRING
            },
            number_from: {
                type: Sequelize.INTEGER
            },
            email_to: {
                type: Sequelize.STRING
            },
            number_to: {
                type: Sequelize.INTEGER
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
        return queryInterface.dropTable('TransactionDeposits');
    }
};
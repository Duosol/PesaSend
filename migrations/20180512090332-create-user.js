'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            // UserTypeId: {
            //     type: Sequelize.INTEGER,
            //     allowNull: true,
            // },
            user_type_id: {
                type: Sequelize.INTEGER,
                // allowNull: false,
                onDelete: "SET NULL",
                onUpdate: "CASCADE",
                references: {
                    model: 'UserTypes',
                    key: 'id'
                }
            },
            firstname: {
                type: Sequelize.STRING
            },
            lastname: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
            },
            identification_no: {
                type: Sequelize.INTEGER
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: false
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
        return queryInterface.dropTable('Users');
    }
};
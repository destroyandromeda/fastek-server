'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Albums',
            [
                {
                    name: 'Album name 1',
                    description: 'Album description 1',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Album name 2',
                    description: 'Album description 2',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Album name 3',
                    description: 'Album description 3',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ]
        )
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};

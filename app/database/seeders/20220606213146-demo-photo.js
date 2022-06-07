'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Photos',
            [
                {
                    name: '1.jpeg',
                    albumId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '2.jpeg',
                    albumId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '3.jpeg',
                    albumId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '4.jpeg',
                    albumId: 3,
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

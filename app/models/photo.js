import Sequelize from "sequelize"
import {sequelize} from "../database/db.js"

const Photo = sequelize.define('Photos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    albumId: {
        type: Sequelize.INTEGER
    },
}, {
    timestamps: true
})

export default Photo
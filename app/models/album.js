import Sequelize from 'sequelize'
import {sequelize} from '../database/db.js'
import Photo from "./photo.js"

const Album = sequelize.define('Album', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    description: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: true
})

Album.hasMany(Photo, {onDelete: 'cascade', hooks: true, foreignKey: 'albumId'})
Photo.belongsTo(Album, {foreignKey: 'albumId'})

export default Album
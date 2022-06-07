import Album from "../models/album.js"
import Photo from "../models/photo.js";

export const all = async (req, res) => {
    try {
        const albums = await Album.findAll({
            attributes: ['id', 'name', 'description'],
            order: [
                ['id', 'DESC']
            ],
            include: [
                {model: Photo, as: Photo.tableName}
            ]
        })
        return res.status(200).send({data: albums, message: ""})
    } catch (e) {
        console.log(e)
        return res.status(500).send({message: e})
    }
}

export const one = async (req, res) => {
    try {
        const {id} = req.params
        const album = await Album.findOne({
            attributes: ['id', 'name', 'description'],
            where: {id},
            include: [
                {model: Photo, as: Photo.tableName}
            ]
        })


        return res.status(200).send({data: album, message: ""})
    } catch (e) {
        console.log(e)
        return res.status(500).send({message: e})
    }
}
export const add = async (req, res) => {
    try {
        const {body, files} = req
        const info = JSON.parse(body.info)
        const {name, description} = info

        const album = await Album.create({
            name, description
        }, {
            fields: ['name', 'description']
        })
        if (album.id) {
            const albumId = album.id
            const upload = files.map(async (file) => {
                const name = file.filename
                return Photo.create({
                    name, albumId
                }, {
                    fields: ['name', 'albumId']
                })
            })
            const result = await Promise.all(upload).then(res => res)
        }

        const albums = await Album.findAll({
            attributes: ['id', 'name', 'description'],
            order: [
                ['id', 'DESC']
            ],
            include: [
                {model: Photo, as: Photo.tableName}
            ]
        })
        return res.status(200).send({data: albums, message: ""})
    } catch (e) {
        console.log(e)
        return res.status(500).send({message: e})
    }
}

export const upd = async (req, res) => {
    try {
        const {id} = req.params
        const {body, files} = req
        const info = JSON.parse(body.info)
        const {name, description} = info

        const album = await Album.findOne({where: {id}})

        if (album.id) {
            const albumId = album.id
            const upload = files.map(async (file) => {
                const name = file.filename
                return Photo.create({
                    name, albumId
                }, {
                    fields: ['name', 'albumId']
                })
            })
            const result = await Promise.all(upload).then(res => res)
            const updatedAlbum = await album.update({
                name, description
            })
            const albums = await Album.findAll({
                attributes: ['id', 'name', 'description'],
                order: [
                    ['id', 'DESC']
                ],
                include: [
                    {model: Photo, as: Photo.tableName}
                ]
            })
            return res.status(200).send({data: albums, message: ""})
        }

        return res.status(404).send({
            message: 'Not Found!'
        })
    } catch (e) {
        console.log(e)
        return res.status(500).send({message: e})
    }
}

export const del = async (req, res) => {
    try {
        const {id} = req.params
        const album = await Album.destroy({
            where: {
                id
            }
        })
        if (!album) {
            return res.status(404).send({
                message: 'Not Found!'
            })
        } else {
            const albums = await Album.findAll({
                attributes: ['id', 'name', 'description'],
                order: [
                    ['id', 'DESC']
                ],
                include: [
                    {model: Photo, as: Photo.tableName}
                ]
            })
            return res.status(200).send({data: albums, message: ""})
        }

    } catch (e) {
        console.log(e)
        return res.status(500).send({message: e})
    }
}
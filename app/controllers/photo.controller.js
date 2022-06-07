import Photo from "../models/photo.js";
import path from "path";
import {fileURLToPath} from "url";
import * as fs from "fs";
import Album from "../models/album.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


export const add = async (req, res) => {
    const {body, files} = req
    const {albumId} = body
    try {
        const upload = files.map(async (file) => {
            const name = file.filename
            return Photo.create({
                name, albumId
            }, {
                fields: ['name', 'albumId']
            })
        })
        const result = await Promise.all(upload).then(res => res)
        return res.status(200).send({result})
    } catch (e) {
        console.log(e)
        return res.status(500).send({message: e})
    }
}

export const one = async (req, res) => {
    try {
        const {name} = req.params

        return res.status(200).send({
            data: "data:image/png;base64," + fs.readFileSync(path.join(__dirname, '../../public/images', name), "base64")
        })
    } catch (e) {
        console.log(e)
        return res.status(500).send({message: e})
    }

}

export const del = async (req, res) => {
    try {
        const {id} = req.params

        const photo = await Photo.findOne({
            where: {id}
        })
        if (photo.id && photo.name) {
            await Photo.destroy({
                where: {
                    id
                }
            })
            const pathF = path.join(__dirname, '../../public/images/', photo.name)
            fs.unlinkSync(pathF)
            return res.status(200).send({
                message: 'Photo deleted successfully'
            })
        } else {
            return res.status(404).send({message: 'Not found'})
        }
    } catch (e) {
        console.log(e)
        return res.status(500).send({message: e})
    }

    return res.status(200).send({message: ''})
}

export const delAllPhotoInAlbum = async (req, res) => {
    try {
        const {id} = req.params
        await Photo.destroy({
            where: {
                albumId: id
            }
        })
        return res.status(200).send({
            message: 'Photos in album deleted successfully'
        })
    } catch (e) {
        console.log(e)
        return res.status(500).send({message: e})
    }

    return res.status(200).send({message: ''})
}
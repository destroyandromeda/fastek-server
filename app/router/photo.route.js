import {Router} from "express"
import {add, del, delAllPhotoInAlbum, one} from "../controllers/photo.controller.js"
import multer from 'multer'


const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        const name = Date.now() + "." + file.mimetype.replace('image/', '')
        cb(null, name)
    }
})

const fileFilter = (req, file, cb) => {
    const type = file.mimetype
    if (type === "image/png" || type === "image/jpg" || type === "image/jpeg") {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({storage: storageConfig, fileFilter: fileFilter})

const router = Router()
const prefix = '/photo'
router
    .post(prefix, upload.array('photos'), add)
    .delete(prefix + '/:id', del)
    .get(prefix + '/:name', one)
    .delete(prefix + '/:id/all', delAllPhotoInAlbum)

export default router

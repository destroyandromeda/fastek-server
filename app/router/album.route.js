import {Router} from "express"
import {all, one, add, upd, del} from "../controllers/album.controller.js";
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

const prefix = '/album'

router
    .get(prefix, all)
    .post(prefix, upload.array('photos'), add)
    .get(prefix + '/:id', one)
    .put(prefix + '/:id', upload.array('photos'), upd)
    .delete(prefix + '/:id', del)

export default router
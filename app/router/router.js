import {Router} from "express"
import photo from "./photo.route.js";
import album from "./album.route.js";

const router = Router()

router.use(photo)
router.use(album)

export default router
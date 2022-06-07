import express from 'express'
import {Cors} from './cors.js';
import router from "./router/router.js";
import bodyParser from 'body-parser'
import path from "path"
import {fileURLToPath} from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


app.use('/public', express.static(path.join(__dirname, '../', '/public')))
app.use('/', Cors)
app.use(bodyParser.json())
app.use('/api', router)


export default app

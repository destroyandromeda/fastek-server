import 'dotenv/config'
import app from './app/main.js'

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`http://localhost:${port}`)
})
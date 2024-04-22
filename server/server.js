const express = require("express")
const app = express()
const router = require("../app/src/routers/login.js")
const PORT = 3004
app.use(express.json())


app.use('/', express.static("app/screens/"))

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`http://localhost:3003/`)
})
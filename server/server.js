const express = require("express")
const app = express()
const router = require("../app/src/routers/login.js")
const routers = require("../app/src/routers/userloans.js")
const PORT = 3004
app.use(express.json())


app.use('/', express.static('./app/screens'))

app.use('/usersapi', router)
app.use('/booksapi', routers)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`)
})
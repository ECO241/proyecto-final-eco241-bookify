const express = require("express")
const app = express()
const PORT = 3003

app.use(express.json())
app.use('/', express.static("app/screens/"))


app.listen(PORT, () => {
    console.log(`http://localhost:3003/`)
})
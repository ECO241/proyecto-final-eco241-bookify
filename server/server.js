
const express = require("express")
const app = express()
const PORT = 3003

app.use(express.json())
app.use('/app', express.static("app"))



 let usuarios = []
//Metodo GET 

app.get('/user', (req, res) => {
    res.send(usuarios)
})

//Metodo post

app.post('/user', (req, res) => {
    usuarios.push(req.body)
    res.end()
})

app.listen(PORT, () => {
    console.log(`http://localhost:3003/app`)
})

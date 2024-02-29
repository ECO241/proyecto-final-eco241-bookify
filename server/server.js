const express = require("express");
const app = express();
const PORT = 3001;

app.use('/app', express.static("public"))

app.listen(PORT, () => {
    console.log(`http://localhost:3001/app`)
})

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
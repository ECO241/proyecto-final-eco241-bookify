const express = require('express');
const routers = express.Router();
const z = require('zod');


routers.get('/books', (req, res) => {
    res.send("aqui van los librosa")
})

routers.post('/books', (req, res) => {
    usuarios.push(req.body)
    res.end()
})

module.exports = routers;
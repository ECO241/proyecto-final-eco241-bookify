const express = require('express');
const routerUsuarios = express.Router();
const z = require('zod');

//traer todos los usuarios
routerUsuarios.get('/users', (req, res) => {
    res.send("aqui van los libros")
})

//traer un usuario
routerUsuarios.get('/users/:id', (req, res) => {
    res.send("aqui va un libro")
})

//añade el usuario a la api
routerUsuarios.post('/users', (req, res) => {
    usuarios.push(req.body)
    res.end()
})

module.exports = routerUsuarios;
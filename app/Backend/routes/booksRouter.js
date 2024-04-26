const express = require('express');
const routerLibros = express.Router();
const z = require('zod');

//traer todos los libros
routerLibros.get('/books', (req, res) => {
    res.send("aqui van los libros")
})

//traer un libro
routerLibros.get('/books/:id', (req, res) => {
    res.send("aqui va un libro")
})

//crear un libro, creo que se hace en el mopi
routerLibros.post('/books', (req, res) => {
    usuarios.push(req.body)
    res.end()
})

module.exports = routerLibros;
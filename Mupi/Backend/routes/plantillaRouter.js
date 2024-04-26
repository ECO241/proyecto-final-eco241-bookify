const express = require("express");
const plantillaRouter = express.Router();
const plantillaController = require('../handlers/plantillaController');

// Ruta para reducir el inventario de fármacos
plantillaRouter.post('/reducir-inventario', plantillaController.controller);

// Otras rutas para los fármacos...


module.exports = plantillaRouter
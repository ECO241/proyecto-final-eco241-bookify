const express = require('express');
const router = express.Router();
const z = require('zod');

let usuarios = []
 
router.get('/user', (req, res) => {
    res.send(usuarios)
})

router.post('/user', (req, res) => {
    usuarios.push(req.body)
    res.end()
})



export default router;
const express = require('express');

const router = express.Router();

let books = []


router.get('/', (req, res) => {
    res.json(books);
});





module.exports = router;
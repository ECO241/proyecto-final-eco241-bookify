const express = require('express');
const path = require('path'); // Add this line

const router = express.Router();

let books = []


router.get('/', (req, res) => {
    res.json(books);
});

router.get('/prueba', function(req, res) {
    res.sendFile(path.join(__dirname, '../static/indexMopi/screens/indexMopi/indexMopi.html'));
}); 

module.exports = router;

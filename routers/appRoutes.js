const express = require('express');
const path = require('path'); // Add this line

const router = express.Router();

let books = []


router.get('/', (req, res) => {
    res.json(books);
});
router.get('/Loans', function(req, res) {
    res.sendFile(path.join(__dirname, '../static/indexApp/screens/Loans.html'));
});




module.exports = router;
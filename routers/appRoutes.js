const express = require('express');
const path = require('path'); // Add this line

const router = express.Router();

let books = []


router.get('/', (req, res) => {
    res.json(books);
});



router.get('/Loans', function(req, res) {
    res.sendFile(path.join(__dirname, '../static/indexApp/screens/Loans/Loans.html'));
});

router.get('/Detail', function(req, res) {
    res.sendFile(path.join(__dirname, '../static/indexApp/screens/Detail/Detail.html'));
});

router.get('/Renew', function(req, res) {
    res.sendFile(path.join(__dirname, '../static/indexApp/screens/Renew/Renew.html'));
});


router.get('/Thanks', function(req, res) {
    res.sendFile(path.join(__dirname, '../static/indexApp/screens/Thanks/Thanks.html'));
});


router.use('/static', express.static(path.join(__dirname, '/static')));



module.exports = router;
const express = require('express');
const path = require('path'); // Add this line

const router = express.Router();



const BooksController = require('../controllers/utils/Bookservices.js');


 router.get('/',  BooksController.getAllBooks);

router.get('/users', (req, res) => {
    res.json(users);
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





module.exports = router;
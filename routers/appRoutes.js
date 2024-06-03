const express = require('express');
const path = require('path'); // Add this line

const router = express.Router();


const UsersController = require('../controllers/utils/UserServices.js');
const BooksController = require('../controllers/utils/Bookservices.js');
const LoansController = require('../controllers/LoansController.js');


 router.get('/',  BooksController.getAllBooks);
 router.get('/:id',  BooksController.getBookById);

router.get('/users', UsersController.getAllUsers);

router.get('/users/:id', UsersController.getUserById);

router.get('/Loansdata', LoansController.getAllLoans);

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
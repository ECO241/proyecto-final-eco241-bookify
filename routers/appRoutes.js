const express = require('express');
const path = require('path'); // Add this line

const router = express.Router();


const UsersController = require('../controllers/utils/UserServices.js');
const BooksController = require('../controllers/utils/Bookservices.js');
const LoansController = require('../controllers/utils/LoansServices.js');

router.get('/books', BooksController.getAllBooks);

router.get('/books/:id',  BooksController.getBookById);

router.get('/users', UsersController.getAllUsers);

router.get('/users/:id', UsersController.getUserById);

router.get('/Loans', LoansController.getAllLoans);

router.get('/Loans/:id', LoansController.getLoanById);




module.exports = router;
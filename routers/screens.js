const express = require('express');
const path = require('path'); // Add this line

const router = express.Router();


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

router.get('/timeleft', function(req, res) {
    res.sendFile(path.join(__dirname, '../static/indexApp/screens/time_left/time_left.html'));
});

module.exports = router;
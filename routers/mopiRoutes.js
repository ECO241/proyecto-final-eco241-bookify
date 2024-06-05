const express = require('express');
const path = require('path'); 


const router = express.Router();

let books = []

router.get('/Home', function(req, res) {
    res.sendFile(path.join(__dirname, '../static/indexMopi/indexMopi.html'));
}); 

router.get('/Carnet', function(req, res) {
    res.sendFile(path.join(__dirname, '../static/indexMopi/screens/typeCarnet/typeCarnet.html'));
}); 

router.get('/loans', function(req, res) {
    res.sendFile(path.join(__dirname, '../static/indexMopi/screens/bookConfirm/bookConfirm.html'));
}); 

router.get('/thanks', function(req, res) {
    res.sendFile(path.join(__dirname, '../static/indexMopi/screens/screenThanks/screenThanks.html'));
}); 

router.get('/scanerbook', function(req, res) {
    res.sendFile(path.join(__dirname, '../static/indexMopi/screens/scanerBook/scanerBook.html'));
}); 

router.get('/scanerqr', function(req, res) {
    res.sendFile(path.join(__dirname, '../static/indexMopi/screens/scanerQr/scanerQrSocket.html'));
}); 



module.exports = router;

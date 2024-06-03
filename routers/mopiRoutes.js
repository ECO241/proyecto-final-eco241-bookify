const express = require('express');
const path = require('path'); 


const router = express.Router();

let books = []


router.get('/', (req, res) => {
    res.json(books);
});

router.get('/thanks', function(req, res) {
    res.sendFile(path.join(__dirname, '../static/indexMopi/screens/screenThanks/screenThanks.html'));
}); 

router.get('/scanerqr', function(req, res) {
    res.sendFile(path.join(__dirname, '../static/indexMopi/screens/scanerBook/scanerBook.html'));
}); 


module.exports = router;
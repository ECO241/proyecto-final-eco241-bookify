const express = require('express');
const path = require('path'); // Add this line

const router = express.Router();

let books = []


router.get('/', (req, res) => {
    res.json(books);
});

router.get('/thanks', function(req, res) {
    res.sendFile(path.join(__dirname, '../static/indexMopi/screenThanks/screenThanks.html'));
}); 

module.exports = router;
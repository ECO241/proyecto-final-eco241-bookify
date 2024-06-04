
const PORT = 3000;

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
app.use(express.static('js'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


const books = require('./routers/appRoutes');
const screens = require('./routers/screens');
const books1 = require('./routers/mopiRoutes.js');

app.use('/books1', books1);
app.use('/books', books);

app.get('/indexApp', function(req, res) {
    res.sendFile(path.join(__dirname, 'static/indexApp/indexApp.html'));
});

app.use('/static', express.static(path.join(__dirname, '/static')));

app.use('/screens', screens);


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




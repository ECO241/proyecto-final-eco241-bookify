//aqui es el server unu
const PORT = 3000;

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const books = require('./routers/appRoutes.js');

app.use('/books', books);

app.get('/indexApp', function(req, res) {
    res.sendFile(path.join(__dirname, 'static/indexApp/indexApp.html'));
});







server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
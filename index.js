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

const books = require('./routers/mopiRoutes.js');

app.use('/books', books);

app.use('/static', express.static(path.join(__dirname, '/static')));


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

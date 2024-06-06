const PORT = 3000;

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const cors = require('cors');
const { SerialPort, ReadlineParser } = require('serialport');

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

/*app.get('/scan', (req, res) => {
    const sessionId = req.query.session_id;
    // Emitir un evento al cliente con el session_id
    io.to(sessionId).emit('qrScanned', { sessionId });
    res.send('QR Code scanned!');
});*/

io.on('connection', (socket) => {
    console.log(`Client connected`);

    socket.on('disconnect', () => {
        console.log(`Client disconnected with session_id: ${sessionId}`);
    });
});

const port = new SerialPort({
    path: 'COM10',
    baudRate: 9600,
});

const parser = new ReadlineParser({ delimiter: '\r\n' });
port.pipe(parser);

parser.write('START\n');

parser.on('data', (data) => {
    if (String(data).includes('ON')) {
        io.emit("boton presionado");
    }
});
port.on('error', (err) => {
    console.log('Error: ', err.message);
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


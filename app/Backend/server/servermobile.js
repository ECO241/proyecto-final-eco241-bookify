// Importación de los módulos necesarios
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3005;


// Llamando routers
const routerLibros = require('.../app/Backend/routes/bookRouter.js');
const routerUsuarios = require('./app/Backend/routes/userRouter.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Enrutamientos
app.use('/apiBooks', routerLibros);
app.use('/apiUsuarios', routerUsuarios);

//puerto
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});

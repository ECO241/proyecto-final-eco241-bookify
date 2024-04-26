// Importación de los módulos necesarios
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

// Definir rutas
const routerFarmacos = require('./router/farmacosRouter')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Enrutamientos
app.use('/Farmacos', routerFarmacos);



const port = 3000;

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

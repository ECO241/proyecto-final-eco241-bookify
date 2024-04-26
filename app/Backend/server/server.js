// Importación de los módulos necesarios
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3005;


// Definir rutas


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Enrutamientos
app.use('/Farmacos', routerFarmacos);




//puerto
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${port}`);
});

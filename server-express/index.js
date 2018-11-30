const express = require('express');
const morgan = require('morgan');
const router = require('./routes');
const routerAPI = require('./routes/api');
require('colors');

const app = express();

// CONFIGURACIONES
app.set('appName', 'Mi primer servidor');
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(morgan('combined'));

// RUTAS
app.use(router);
app.use('/api', routerAPI);

app.listen(3000, () => {
    console.log('ESCUCHANDO PUERTO 3000'.rainbow.bold);
    console.log('DESCRIPCION : ', app.get('appName'));
});
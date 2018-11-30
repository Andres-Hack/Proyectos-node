const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('colors');

const app = express();
const indexRoutes = require('./routes')

mongoose.connect('mongodb://localhost/crud-mongo', { useNewUrlParser:true })
  .then(db => console.log('MongoDB conectado ...!!'))
  .catch(err => console.log(err));

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
    console.log("SERVIDOR ESCUCHANDO EN EL PUERTO".rainbow.bold, app.get('port').toString().rainbow.bold);
})
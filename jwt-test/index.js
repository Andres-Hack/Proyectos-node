const express = require('express');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');
require('colors');

const app = express();

app.use(morgan('combined'));
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send('<h1>HOla.....</h1>')
});

app.post('/api/login', (req, res) => {
  const user = {
    id: 3,
    nombre: "Andres Mamani Perez",
    area: "UIIT"
  };
  const token = jwt.sign({user}, 'my_secret_key');
  res.json({
    token
  });
});

app.get('/api/protected', ensureToken, (req, res) => {
  jwt.verify(req.token, 'my_secret_key', (err, data) => {
    if (err) {
      res.sendStatus(403);
    }
    res.json({
      text: 'Login Success',
      data
    });
  });
});

function ensureToken(req , res, next) {
  const bearerHeader = req.headers['authorization'];
  console.log(bearerHeader);
  if (typeof bearerHeader != 'undefined') {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();    
  }else{
    res.sendStatus(403);
  }
}

app.listen(app.get('port'), () => {
  console.log("Corriendo en el puerto 3000".rainbow.bold);
});

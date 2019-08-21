const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');




app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
}));

//Necessário finalizar o BD
// const sessaoAutenticacao = require('./autenticacao');
// sessaoAutenticacao(app);

app.set('view engine', 'ejs');
app.set('views','./src/app/views');

const rotas = require('../app/routes/routes');
rotas(app);
module.exports = app;
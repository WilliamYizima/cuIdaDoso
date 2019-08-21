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
const rotas = require('../app/routes/routes');
rotas(app);
module.exports = app;
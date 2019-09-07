const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
var passport = require('passport');
const { Client } = require('pg');
const PostgreSQLStrategy = require('../app/dao/strategies/postgreeStrategy')

if(process.env.NODE_ENV == 'production'){

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  
  client.connect(function(err){
    console.log("Conectado em produção")
  client.query('select * from usuario', (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log("meu teste no BD, deve retornar Cuidadoso - 123")
      console.log(res.rows[0])
    }
  })

})

}else{
  const postgree = new PostgreSQLStrategy();
  postgree.isConnected();
  postgree.login('william.yizima@hotmail.com').then(usuario=>{
    console.log(`Teste básico do BD DEV:`,JSON.stringify(usuario,null,4))
  })
  console.log("Conectado em dev")
}




app.use(express.json());
app.use(express.urlencoded({extended:true}));




// app.get('/api/all',(req,res)=>{
//     client.query("SELECT * FROM usuario",function(err,results){
//         res.json(results)
//     })
// })


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
const sessaoAutenticacao = require('./autenticacao');
sessaoAutenticacao(app);

app.set('view engine', 'ejs');
app.set('views','./src/app/views');
app.use(express.static('public'));


const rotas = require('../app/routes/routes');
rotas(app);
module.exports = app;
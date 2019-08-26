
// const express = require('express');
// // const app = require('./src/config/custom-express');	
// const app = express();         
// const bodyParser = require('body-parser');
// const port = 3000; //Porta padrão
// const mysql = require('mysql');

// // const app = require('./src/config/custom-express');



// //Configurando o body parser para pegar POSTS futuramente
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// //Definindo rota inicial
// const router = express.Router();
// router.get('/cuidadoso', (req, res) => res.json({ message: 'Funcionando!' }));
// app.use('/cuidadoso', router);

// //Inicia o servidor
// app.listen(port);
// console.log('API funcionando!');

//  //Rota usuarios e Pesquisa um usuário
// //  router.get('/', (req, res) =>{
// //     res.send("olá")
// // })

//  router.get('/cadastro/usuarios/:id?', (req, res) =>{
//     let filter = '';
// 	if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);	
//     execSQLQuery('SELECT * FROM usuarios' + filter, res);
// })
//  //Rota prestadores e Pesquisa um prestador
// router.get('/cadastro/prestadores/:id?', (req, res) =>{
//     let filter = '';
//     if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
//     execSQLQuery('SELECT * FROM prestadores' + filter, res);
// })

// //Deleta um usuario
// router.delete('/cadastro/usuarios/:id', (req, res) =>{
//     execSQLQuery('DELETE FROM usuarios WHERE ID=' + parseInt(req.params.id), res);
// })
// //Deleta um prestador
// router.delete('/cadastro/prestadores/:id', (req, res) =>{
//     execSQLQuery('DELETE FROM prestadores WHERE ID=' + parseInt(req.params.id), res);
// })

// //Insere um usuario
// router.post('/cadastro/usuarios', (req, res) =>{
//     const id = parseInt(req.params.id);
//     const nome = req.body.nome.substring(0,150);
// 	const email = req.body.email.substring(0,50);
// 	const cep = req.body.cep.substring(0,9);
// 	const endereco = req.body.endereco.substring(0,50);
// 	const numero = req.body.numero.substring(0,5);
// 	const cidade = req.body.cidade.substring(0,50);
// 	const estado = req.body.estado.substring(0,50);
// 	const senha = req.body.senha.substring(0,11);
// 	execSQLQuery(`INSERT INTO usuarios (nome, email, cep, endereco, numero, cidade, estado, senha) 
// 	VALUES('${nome}', '${email}', '${cep}', '${endereco}', 
// 	'${numero}', '${cidade}', '${estado}', '${senha}')`, res);
// });
// //Insere um prestador
// router.post('/cadastro/prestadores', (req, res) =>{
//     const id = parseInt(req.params.id);
//     const nome = req.body.nome.substring(0,150);
// 	const email = req.body.email.substring(0,50);
// 	const cep = req.body.cep.substring(0,9);
// 	const endereco = req.body.endereco.substring(0,50);
// 	const numero = req.body.numero.substring(0,5);
// 	const cidade = req.body.cidade.substring(0,50);
// 	const estado = req.body.estado.substring(0,50);
// 	const senha = req.body.senha.substring(0,11);
// 	execSQLQuery(`INSERT INTO prestadores (nome, email, cep, endereco, numero, cidade, estado, senha) 
// 	VALUES('${nome}', '${email}', '${cep}', '${endereco}', 
// 	'${numero}', '${cidade}', '${estado}', '${senha}')`, res);
// });

// //Atualiza um usuário
// router.patch('/cadastro/usuarios/:id', (req, res) =>{
//     const id = parseInt(req.params.id);
//     const nome = req.body.nome.substring(0,150);
// 	const email = req.body.email.substring(0,50);
// 	const cep = req.body.cep.substring(0,9);
// 	const endereco = req.body.endereco.substring(0,50);
// 	const numero = req.body.numero.substring(0,5);
// 	const cidade = req.body.cidade.substring(0,50);
// 	const estado = req.body.estado.substring(0,50);
// 	const senha = req.body.senha.substring(0,11);
// 	execSQLQuery(`UPDATE usuarios SET nome='${nome}', email='${email}', cep='${cep}', endereco='${endereco}', 
// 	numero='${numero}', cidade='${cidade}', estado='${estado}', senha='${senha}' WHERE ID=${id}`, res);
// })
// //Atualiza um prestador
// router.patch('/cadastro/prestadores/:id', (req, res) =>{
//     const id = parseInt(req.params.id);
//     const nome = req.body.nome.substring(0,150);
// 	const email = req.body.email.substring(0,50);
// 	const cep = req.body.cep.substring(0,9);
// 	const endereco = req.body.endereco.substring(0,50);
// 	const numero = req.body.numero.substring(0,5);
// 	const cidade = req.body.cidade.substring(0,50);
// 	const estado = req.body.estado.substring(0,50);
// 	const senha = req.body.senha.substring(0,11);
// 	execSQLQuery(`UPDATE prestadores SET nome='${nome}', email='${email}', cep='${cep}', endereco='${endereco}', 
// 	numero='${numero}', cidade='${cidade}', estado='${estado}', senha='${senha}' WHERE ID=${id}`, res);
// })

// //Executa consultas no BD
// function execSQLQuery(sqlQry, res){
// 	const connection = mysql.createConnection({
// 		host     : '',
// 		port     : 3306,
// 		user     : 'root',
// 		password : 'cuidadoso8842',
// 		database : 'cuidadoso'
// 	});
  
// 	connection.query(sqlQry, function(error, results, fields){
// 		if(error) 
// 		  res.json(error);
// 		else
// 		  res.json(results);
// 		connection.end();
// 		console.log('executou!');
// 	});
//   }

 //aaa

 //bbbb

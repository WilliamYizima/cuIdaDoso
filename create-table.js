const mysql      = require('mysql');
const connection = mysql.createConnection({ //Conecta com o BD
  host     : '',
  port     : 3306,
  user     : 'root',
  password : 'cuidadoso8842',
  database : 'cuidadoso'
});

connection.connect(function(err){
  if(err) return console.log(err);
  console.log('conectou!');
  createTable(connection);   
  });

function createTable(conn){ //Cria uma tabela

    const sql = "CREATE TABLE IF NOT EXISTS usuarios"+ 
    "(id INT NOT NULL AUTO_INCREMENT,"+ 
    "nome VARCHAR(255) NOT NULL,"+
    "email VARCHAR(50) NOT NULL,"+ 
    "cep VARCHAR(9) NOT NULL,"+
    "endereco VARCHAR(50) NOT NULL,"+ 
    "numero VARCHAR(5) NOT NULL,"+ 
    "estado VARCHAR(50) NOT NULL,"+ 
    "cidade VARCHAR(50) NOT NULL,"+ 
    "senha VARCHAR(128) NOT NULL, PRIMARY KEY (id))"

    const sql2 = "CREATE TABLE IF NOT EXISTS prestadores"+ 
    "(id INT NOT NULL AUTO_INCREMENT,"+ 
    "nome VARCHAR(255) NOT NULL,"+
    "email VARCHAR(50) NOT NULL,"+ 
    "cep VARCHAR(9) NOT NULL,"+
    "endereco VARCHAR(50) NOT NULL,"+ 
    "numero VARCHAR(5) NOT NULL,"+ 
    "estado VARCHAR(50) NOT NULL,"+ 
    "cidade VARCHAR(50) NOT NULL,"+ 
    "senha VARCHAR(128) NOT NULL, PRIMARY KEY (id))"
    
    conn.query(sql, sql2, function (error, results, fields){
        if(error) return console.log(error);
        console.log('criou a tabela!');  
        addRows(connection);
    });    
}

function addRows(conn){ //Insere linhas na tabela
    const sql = "INSERT INTO usuarios(nome, email, cep, endereco, numero, estado, cidade, senha) VALUES ?";
    const values = [
          ['Joan Darce', 'joan@email.com.br', '88161-020', 'Rua Rodrigo Campos Bastos', '845', 'Biguaçu', 'SC', 'fo1CHLHb'],
          ['Neide da Conceição', 'neide@email.com.br', '32687-360', 'Rua Nova Jerusalém', '22', 'Betim', 'MG', 'OFnBhHBd'],
          ['Milto Lucas', 'milto@email.com.br', '67124-080', 'Quadra C', '326', 'Ananindeua', 'PA', '7GAdWCnM']
        ];  

    const sql2 = "INSERT INTO prestadores(nome, email, cep, endereco, numero, estado, cidade, senha) VALUES ?";
    const values2 = [
          ['Ana Maria', 'anamaria@email.com.br', '64029-158', 'Rua Canadá', '99', 'Teresina', 'PI', '5I6JDJl1'],
          ['Enzo Zimbra', 'enzozi@email.com.br', '78717-520', "Rua Cinco", '56', 'Rondonópolis', 'MT', 'SC7Lxce9'],
          ['Jailson Mendes', 'jailsonmen@email.com.br', '42805-470', 'Rua Futuro', '12', 'Camaçari', 'BA', '0dBngdUE']
        ];  
        
        conn.query(sql, [values], function (error, results, fields){
            if(error) return console.log(error);
            console.log('adicionou registros!');                        
        });     
        conn.query(sql2, [values2], function (error, results, fields){
          if(error) return console.log(error);
          console.log('adicionou registros!');       
        }); 
                  

  } 








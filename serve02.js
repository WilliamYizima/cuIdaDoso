const app = require('./src/config/custom-express');

const port = process.env.PORT || 8000;


app.listen(port,()=>{
	console.log(`Subi o servidor na porta ${port}`)
}); 
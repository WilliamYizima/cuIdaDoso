var http = require('http');
var fs = require('fs');
//teste

http.createServer(function (req, res) {
	console.log("Port Number : 5000");
	// change the MIME type from 'text/plain' to 'text/html'
    res.writeHead(200, {'Content-Type': 'text/html'});
	//reading the content file
	fs.readFile('horas.html', (err, data) => {
		//checking for errors
		if (err) 
			throw err;
		console.log("Operation Success");
		//sending the response
		res.end(data);
	});
}).listen(5000);
					
var http = require('http');

var h = http.createServer(function (req, res) {
	
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello\n');
    
	setTimeout(function(){
		res.end('world\n');
	},2000);

});

h.listen(8124, "127.0.0.1");

console.log('Server running at http://127.0.0.1:8124/');

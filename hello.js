var http = require('http');
var net = require('net');

var msg = "";
var lastMsg = "";
var cmd = "";

var h = http.createServer(function (req, res) {
	
	res.writeHead(200, {'Content-Type': 'text/plain'});
	
	/// Llenar el buffer en el browser
	for (var i=0; i < 20; i++) {
		res.write('.............................................................................\n');
	};
	
	setInterval(function(){
		
		if (msg.length > 0) {
			if (lastMsg != msg) {
				res.write(msg + '\n');
				lastMsg = msg;
			};
		};
		
		if (cmd.length > 0) {
			if (cmd = "end") {
				res.end('La conexion fue cerrada\n')
			};
		};
		
	}, 1000);
});

h.listen(8124, "127.0.0.1");

var s = net.Server(function(socket){
	
	socket.on('data', function (d){
		
		if (d.length > 0) {
			if (d == "end") {
				cmd = d;
			} else {
				msg = d;
			};
			console.log('Comando: ' + d);
		};
	});
});

s.listen(8125, "127.0.0.1");

console.log('Server running at http://127.0.0.1:8124/');

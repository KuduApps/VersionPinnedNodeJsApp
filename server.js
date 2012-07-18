require('http').createServer(function (req, res) {
	res.writeHead(200);
	res.end(process.version);
}).listen(process.env.PORT || 3000);
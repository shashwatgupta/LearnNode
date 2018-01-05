var http = require('http');

var server = http.createServer(function (request, response) {
        request.Pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
        })).Pipe(response);
});

server.listen(process.argv[2]);
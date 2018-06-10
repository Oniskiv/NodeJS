import server from 'http';

server.createServer()
    .on('request', (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World');
        res.end();
    })
    .listen(3001, () => console.log('Plain-text-server listening on port 3001!'));
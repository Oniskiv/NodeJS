import server from 'http';

server.createServer()
    .on('request', (req, res) => {
        res.writeHead(200);
        req.pipe(res);
    })
    .listen(3004, () => console.log('Echo-server listening on port 3004!'));
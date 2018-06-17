import server from 'http';
import fs from 'fs';
import config from './../../config/configuration';
import through from 'through2';

const replace = () => {
    return through((data, enc, cb) => {
        cb(null, data.toString().replace('{message}', 'Hello World'));
    })
};

server.createServer()
    .on('request', (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(config.static + '/index.html').pipe(replace()).pipe(res);
    })
    .listen(3002, () => console.log('HTML-server listening on port 3002!'));
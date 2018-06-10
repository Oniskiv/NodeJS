import server from 'http';

const product = {
    id: 1,
    name: 'Supreme T-Shirt',
    brand: 'Supreme',
    price: 99.99,
    options: [
        {color: 'blue'},
        {size: 'XL'}
    ]
};

server.createServer()
    .on('request', (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.write(JSON.stringify(product, null, '\t'));
        res.end();
    })
    .listen(3003, () => console.log('JSON-server listening on port 3003!'));
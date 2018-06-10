import memoryDB from '../db/memory-db';

exports.paramId = (req, res, next, id) => {
    let product = memoryDB.getProduct(id);
    if (product) {
        req.product = product;
    }
    else {
        req.product = `Product with id = ${id} not found!`;
    }
    next();
};

exports.allProducts = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/json'});
    memoryDB.getProducts().forEach(user => {
        res.write(JSON.stringify(user, null, '\t'));
    });
    res.end();
};

exports.productById = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(JSON.stringify(req.product, null, '\t'));
    res.end();
};

exports.addProduct = (req, res) => {
    let pr = memoryDB.addProduct(req.body.name, req.body.price, req.body.count);
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(JSON.stringify(pr, null, '\t'));
    res.end();
};

exports.allReviewsByProduct = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/json'});
    req.product.reviews.forEach(review => {
        res.write(JSON.stringify(review));
    });
    res.end();
};
import db from '../db/pg-db';

exports.allProducts = (req, res) => {
    db.getProducts().then(products => {
        res.status(200).json(products);
    });
};

exports.productById = (req, res) => {
    db.getProduct(req.params.id).then(product => {
        res.status(200).json(product);
    });
};

exports.addProduct = (req, res) => {
    db.addProduct(req.body.name, req.body.price, req.body.count, req.body.reviews).then(product => {
        res.status(200).json(product);
    });
};

exports.allReviewsByProduct = (req, res) => {
    db.getReviews(req.params.id).then(review => {
        res.status(200).json(review);
    })
};
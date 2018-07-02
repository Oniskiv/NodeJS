import Product from './../models/product';

exports.allProducts = (req, res) => {
    Product.find((err, products) => {
        res.status(200).json(products);
    });
};

exports.productById = (req, res) => {
    Product.findOne({_id: req.params.id}, (err, product) => {
        res.status(200).json(product);
    });
};

exports.addProduct = (req, res) => {
    let product = new Product({
        name: req.body.name,
        price: req.body.price,
        count: req.body.count,
        reviews: req.body.reviews
    });
    product.save();
    res.status(200).json(product);
};

exports.allReviewsByProduct = (req, res) => {
    Product.findOne({_id: req.params.id}, (err, product) => {
        res.status(200).json(product.reviews);
    });
};

exports.deleteProduct = (req, res) => {
    Product.remove({_id: req.params.id}, (err) => {
        res.status(200).json(`The product with id ${req.params.id} was deleted`);
    });
};

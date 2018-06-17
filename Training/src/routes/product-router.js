import express from 'express';
import productController from './../controllers/product-controller';

const router = express.Router();

router.param('id', productController.paramId);

router.route('/products')
    .get(productController.allProducts)
    .post(productController.addProduct);

router.get('/products/:id', productController.productById);

router.get('/products/:id/reviews', productController.allReviewsByProduct);

module.exports = router;
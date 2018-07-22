import express from 'express';
import productController from './../controllers/product-controller';

const router = express.Router();

router.route('/products')
    .get(productController.allProducts)
    .post(productController.addProduct);

router.get('/products/:id', productController.productById);

router.get('/products/:id/reviews', productController.allReviewsByProduct);

router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
import models from './../models/index';

export default class PgDB {

    static getProducts() {
        return models.Product.findAll();
    }

    static getProduct(id) {
        return models.Product.findById(id);
    }

    static getUsers() {
        return models.User.findAll();
    }

    static getUserByLogin(login) {
        return models.User.findOne({
            where: {login: login}
        });
    }

    static getReviews(id) {
        return models.Product.findOne({
            where: {id: id},
            attributes: ['reviews']
        });
    }

    static addProduct(name, price, count, reviews) {
        return models.Product.create({
            name: name,
            price: price,
            count: count,
            reviews: reviews
        });
    }
}
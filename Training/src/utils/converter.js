import user from './../models/user';
import product from './../models/product';

export default class Product {
    static convertUsers(tempUsers) {
        let users = new Map();
        tempUsers.forEach((us) => {
            users.set(us.id, new user(us.id, us.name, us.login, us.password));
        });
        return users;
    }

    static convertProducts(tempProducts, tempReviews) {
        let products = new Map();
        tempProducts.forEach((pr) => {
            products.set(pr.id, new product(pr.id, pr.name, pr.price, pr.count, new Set()));
        });
        tempReviews.forEach((review) => {
            products.get(review.idProduct).reviews.add(review.review);
        });
        return products;
    }
}
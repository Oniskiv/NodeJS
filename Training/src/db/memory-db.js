import csvjson from 'csvjson';
import fs from 'fs';
import converter from './../utils/converter';
import config from './../../config/configuration';
import product from './../models/product';

const options = {
    delimiter: ','
};

const tempUsers = csvjson.toObject(fs.readFileSync(config.data + 'users.csv', {encoding: 'utf8'}, options));
const tempReviews = csvjson.toObject(fs.readFileSync(config.data + 'reviews.csv', {encoding: 'utf8'}, options));
const tempProducts = csvjson.toObject(fs.readFileSync(config.data + 'products.csv', {encoding: 'utf8'}, options));
const users = converter.convertUsers(tempUsers);
const products = converter.convertProducts(tempProducts, tempReviews);

export default class MemoryDB {

    static getProducts() {
        return products;
    }

    static getProduct(id) {
        return products.get(id);
    }

    static getUsers() {
        return users;
    }

    static getReviews(id) {
        return products.get(id).reviews.values();
    }

    static addProduct(name, price, count) {
        let pr = new product(products.size, name, price, count, new Set());
        products.set(pr.id, pr);
        return pr;
    }
}
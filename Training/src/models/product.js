export default class Product {
    constructor(id, name, price, count, reviews) {
        console.log("Product module");
        this.id = id;
        this.name = name;
        this.price = price;
        this.count = count;
        this.reviews = reviews;
    }
}
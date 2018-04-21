import config from "./../config/configuration";
import user from "./models/user";
import product from "./models/product";

console.log(config.name);
var userObj = new user();
var productObj = new product();
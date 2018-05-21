import config from "./../config/configuration";
import user from "./models/user";
import product from "./models/product";
import dirwatcher from "./modules/dirwatcher";
import importer from "./modules/importer";

console.log(config.name);
const userObj = new user();
const productObj = new product();

const dirwatcherObj = new dirwatcher(config.path, config.delay);
const importerObj = new importer(dirwatcherObj, config.path);

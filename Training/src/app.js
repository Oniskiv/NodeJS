import config from "./../config/configuration";
import user from "./models/user";
import product from "./models/product";
import dirwatcher from "./modules/dirwatcher";
import importer from "./modules/importer";

console.log(config.name);
var userObj = new user();
var productObj = new product();

var dirwatcherObj = new dirwatcher(config.path, config.delay);
var importerObj = new importer(dirwatcherObj, config.path);

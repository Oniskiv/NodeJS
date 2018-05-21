const fs = require('fs');
const util = require('util');
const reader = util.promisify(fs.readFile);
const converter = require("csvtojson").Converter;

export default class Importer {
    constructor(dirWatcher, path) {
        this.emitter = dirWatcher.emitter;
        this.emitter.on('dir-watcher:removed', (file) => {
            console.log("removed " + file);
        });
        this.emitter.on('dir-watcher:added', (file) => {
            console.log("added " + file);
        });
        this.emitter.on('dir-watcher:changed', (file) => {
            console.log("changed " + file);
            reader(path + "\\" + file, {encoding: 'utf8'})
                .then(list => {
                    var converterObj = new converter({});
                    converterObj.fromString(list, function (err, result) {
                        console.log(result);
                    });
                });
        });
    }
}
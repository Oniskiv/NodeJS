const EventEmitter = require('events').EventEmitter;
const fs = require('fs');
const pathUtil = require('path');
const mapAll = new Map();

export default class DirWatcher {
    constructor(path, delay) {
        this.emitter = new EventEmitter();
        setInterval(this.watch, delay, path, this.emitter);
    }

    watch(path, emitter) {
        let setAdd = new Set();
        let setDelete = new Set(mapAll.keys());
        let setChange = new Set();
        fs.readdirSync(path).filter(function (file) {
            return pathUtil.extname(file) == '.csv';
        }).forEach(file => {
            if (setDelete.has(file)) {
                setDelete.delete(file);
                var stat = fs.statSync(path + "\\" + file);
                if (mapAll.get(file) < stat.mtime) {
                    setChange.add(file);
                    mapAll.set(file, stat.mtime);
                }
            } else {
                setAdd.add(file);
                mapAll.set(file, fs.statSync(path + "\\" + file).mtime);
            }
        });

        setDelete.forEach((value, key, map) => {
            mapAll.delete(key);
            emitter.emit('dir-watcher:removed', key);
        });

        setAdd.forEach((value, key, map) => {
            emitter.emit('dir-watcher:added', key);
        });

        setChange.forEach((value, key, map) => {
            emitter.emit('dir-watcher:changed', key);
        });
    }
}
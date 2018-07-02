import {MongoClient as MongoClient} from 'mongodb';
import assert from 'assert';
import config from '../config/config';
import server from 'http';

server.createServer()
    .on('request', (req, res) => {
        MongoClient.connect(config.mongodb.url, {useNewUrlParser: true}, (err, client) => {
            assert.equal(null, err);
            console.log("Connected successfully to server");
            const db = client.db(config.mongodb.dbName);
            findRandom(db, res, function () {
                client.close();
            });
        });
    })
    .listen(3000, () => console.log('Simple web server for working with a mongo listening on port 3000!'));

const findRandom = (db, res, callback) => {
    const collection = db.collection('cities');
    collection.aggregate([{$sample: {size: 1}}]).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log(docs);
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.write(JSON.stringify(docs, null, '\t'));
        res.end();
        callback();
    });
};
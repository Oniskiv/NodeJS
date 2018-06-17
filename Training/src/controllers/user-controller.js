import memoryDB from "../db/memory-db";

exports.allUsers = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/json'});
    memoryDB.getUsers().forEach(user => {
        res.write(JSON.stringify(user, null, '\t'));
    });
    res.end();
}
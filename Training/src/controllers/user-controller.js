import db from "../db/pg-db";

exports.allUsers = (req, res) => {
    db.getUsers().then(users => {
        res.status(200).json(users);
    });
}
import memoryDB from '../db/memory-db';
import config from './../../config/configuration';
import jwt from 'jsonwebtoken';

exports.authorization = (req, res) => {
    let login = req.body.login;
    let password = req.body.password;

    if (!login || !password) {
        res.statusCode = 404;
        res.json({
            code: 404,
            message: 'Not found'
        });
    }
    else {
        let user = memoryDB.getUserByLogin(login);
        if (!user || login !== user.login || password !== user.password) {
            res.statusCode = 404;
            res.json({
                code: 404,
                message: 'Not found'
            });
        } else {
            let token = jwt.sign({data: user}, config.secret, {expiresIn: config.tokenExpiresIn});
            res.statusCode = 200;
            res.contentType('text/json');
            res.json({
                code: 200,
                message: 'OK',
                data: {
                    "user": user
                },
                token: token
            });
        }
    }
}
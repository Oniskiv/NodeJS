import jwt from 'jsonwebtoken';
import config from './../../config/configuration';

const checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, config.secret, (error) => {
            if (error) {
                res.statusCode = 404;
                res.contentType('text/json');
                return res.end(JSON.stringify(error, null, '\t'));
            } else {
                next();
            }
        })
    } else {
        res.statusCode = 404;
        res.contentType('text/json');
        return res.json({
            error: 'The token is not in the query'
        });
    }
};

export default checkToken;
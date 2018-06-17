const parse = (req) => {
    const cookies = req.cookies;
    const parsedCookies = {};
    if (cookies) {
        cookies.forEach((cookie) => {
            const parts = cookie.split('=');
            parsedCookies[parts.shift().trim()] = parts;
        });
    }
    return parsedCookies;
};

const cookieParser = (req, res, next) => {
    req.parsedCookies = parse(req);
    next();
};

export default cookieParser;
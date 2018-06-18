import config from './../config/configuration';
import express from 'express';
import userRouter from './routes/user-router';
import productRouter from './routes/product-router';
import authRouter from './routes/auth-router';
import passportRouter from './routes/passport-router';
import cookieMiddleware from './middlewares/cookie-middleware';
import queryMiddleware from './middlewares/query-middleware';
import authenticatedMiddleware from './middlewares/authenticated-middleware';
import tokenVerifyMiddleware from './middlewares/token-verify-middleware';
import passport from './passport/passport-twitter';
var session = require('express-session');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({secret: config.secret}));
/*app.use(cookieMiddleware);
app.use(queryMiddleware);*/
//app.use('(?!/auth)',tokenVerifyMiddleware);

app.use(passport.initialize());
app.use(passport.session());

/*app.use(passportRouter);
app.use(authenticatedMiddleware);

app.use(authRouter);
app.use('/api', userRouter);
app.use('/api', productRouter);*/

export default app;

import config from './config/config';
import express from 'express';
import userRouter from './routes/user-router';
import productRouter from './routes/product-router';
import cityRouter from './routes/city-router';
import session from 'express-session';

var mongoose = require("mongoose");

mongoose.connect(config.mongodb.url + '/' + config.mongodb.dbName)
    .then(() => console.log('Connecting to the mongo successfully'))
    .catch((err) => console.error(err));

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({secret: config.secret}));

app.use('/api', userRouter);
app.use('/api', productRouter);
app.use('/api', cityRouter);

export default app;

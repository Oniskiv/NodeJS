import express from 'express';
import userRouter from './routes/user-router';
import productRouter from './routes/product-router';
import cookieMiddleware from './middlewares/cookie-middleware';
import queryMiddleware from './middlewares/query-middleware';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieMiddleware);
app.use(queryMiddleware);

app.use('/api', userRouter);
app.use('/api', productRouter);

export default app;

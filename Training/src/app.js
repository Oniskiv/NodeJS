import express from 'express';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user-router';
import productRouter from './routes/product-router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())

app.use('/api', userRouter);
app.use('/api', productRouter);

app.listen(3000, () => console.log('App listening on port 3000!'));

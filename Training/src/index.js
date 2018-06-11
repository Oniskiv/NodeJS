import plainTextServer from './http-servers/plain-text-server';
import htmlServer from './http-servers/html-server';
import jsonServer from './http-servers/json-server';
import echoServer from './http-servers/echo-server';
import app from './app';

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App listening on port ${port}!`));
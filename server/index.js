const fs = require('fs');
const path = require('path');
const winston = require('winston');
const express = require('express');
// const favicon = require('serve-favicon')
// const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
// const db = require('./db')
const api = require('./api');

const logger = winston.createLogger({
  transports: [new winston.transports.Console({ format: winston.format.simple() })],
});

const resolve = file => path.resolve(__dirname, file);

const app = express();

app.set('port', (process.env.port || 3000));
// app.use(favicon(resolve('../dist/favicon.ico')))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(cookieParser())
app.use('/dist', express.static(resolve('../dist')));
app.use(api);

app.get('*', (req, res) => {
  const fileName = 'index.html';
  const html = fs.readFileSync(resolve(`../src/${fileName}`), 'utf-8');
  res.send(html);
});

app.listen(app.get('port'), () => {
  logger.info(`Visit http://localhost: ${app.get('port')}`);
});

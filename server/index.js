const fs = require('fs');
const path = require('path');
const express = require('express');
// const favicon = require('serve-favicon')
// const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
// const db = require('./db')
const resolve = file => path.resolve(__dirname, file);
const api = require('./api');
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
    const html = fs.readFileSync(resolve(`../${fileName}`), 'utf-8');
    res.send(html);
});

app.listen(app.get('port'), () => {
    console.log(`Visit http://localhost: ${app.get('port')}`);
});

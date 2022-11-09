const express = require('express');
const path = require('path'); // NEW
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 8082;
const DIST_DIR = path.join(__dirname, './../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.ejs'); // NEW
app.use('/public', express.static(path.join(__dirname, './../public')));
app.use(express.static('dist'));
app.use(cookieParser());
app.set('views', 'dist');
app.set('view engine', 'ejs');

app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../service-worker.js'));
});

app.get('/public/manifest.json', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/manifest.json'));
});

app.get('*', (req, res) => {
    res.render(HTML_FILE); // EDIT
});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    next();
});

app.get('*.js', function (req, res, next) {
    res.set('Content-Type', 'text/javascript');
    next();
});

app.listen(port, function () {
    console.log('App listening on port: ' + port);
});
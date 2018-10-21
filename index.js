var express = require('express');
var morgan = require('morgan');
var app = express();
var path = require('path');
var public = path.join(__dirname, 'public');

app.set('trust proxy', true);
app.use(morgan());

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});

app.use('/', express.static(public));

app.listen(process.env.PORT || 2020);

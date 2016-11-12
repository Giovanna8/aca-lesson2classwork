const express = require('express');
const names = require('./routes/names');
const bodyParser = require('body-parser');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/names, names');
app.use(bodyParser.urlencoded({extended: false}));

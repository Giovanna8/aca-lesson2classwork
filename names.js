const express = require('express');
const names = require('./routes/names');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/names', names);
app.use('/*', function(req, res, next){
  res.redirect('/names');
});

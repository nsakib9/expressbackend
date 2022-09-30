var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var names = ['john', 'joe', 'Shakib', 'rakib'];

var text = 'This is my text';

app.get('/index', (req, res) => {
  res.render('page1', { names: names });
});

app.get('/about', (req, res) => {
  res.render('page2');
});

app.listen(3000, () => {
  console.log('THe server is working');
});
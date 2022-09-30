var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true })); // to get data from form

var names = ['john', 'joe', 'Shakib', 'rakib'];
var text = 'This is my text';

app.get('/index', (req, res) => {
  res.render('page1', { names: names });
});
app.get('/about', (req, res) => {
  res.render('page2');
});

app.get('/contact', (req, res) => {
  res.render('form');
});
app.post('/contact', (req, res) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lname;

  res.send('My name is =' + firstName + ' ' + lastName);
});

app.listen(3000, () => {
  console.log('THe server is working');
});

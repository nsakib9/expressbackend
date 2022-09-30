var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.set('view engine', 'ejs');
// app.set('views', viewPath); //cdoc folder custom path add

app.use(bodyParser.urlencoded({ extended: true })); // to get data from form

app.use(express.static("cdoc")); //make cdoc folder as public for image .css

app.get('/contact', (req, res) => {
  res.render('form');
});
app.post('/contact', (req, res) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lname;
  res.send('My name is =' + firstName + ' ' + lastName);
});


app.get('/', (req, res) => {
  res.render('index');
});
app.get('/docs-page.html', (req, res) => {
  res.render('docs-page');
});

app.listen(3000, () => {
  console.log('THe server is working');
});

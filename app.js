var express = require('express');
var app = express();

var path = require('path');

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname + '/page1.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname + '/page2.html'));
});

app.listen(3000, () => {
  console.log('THe server is working');
});

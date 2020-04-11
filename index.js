const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', {error: null});
});

app.get('/contacto', function (req, res) {
  res.render('contacto', {error: null});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
});

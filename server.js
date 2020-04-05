const express = require('express');
const dotenv = require('dotenv')
const path = require('path')

dotenv.config()

const app = express();

app.use(express.static(__dirname + '/dist/my-app'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/my-app/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);
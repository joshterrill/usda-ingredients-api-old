const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const api = require('./api');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, () => {
  app.use(api());
  console.log(`Server started http://localhost:${port}`);  
});
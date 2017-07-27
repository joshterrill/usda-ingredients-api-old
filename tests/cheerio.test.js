const request = require('request');
const cheerio = require('cheerio');

function queryGoogle() {
  request.get('http://www.google.com', (err, response, body) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(body);
  });
}

function getGoogleTitle() {
  request.get('http://www.google.com', (err, response, body) => {
    if (err) {
      console.log(err);
      return;
    }
    const $ = cheerio.load(body.replace(/[\n\r\t]+/g, ''));
    const title = $('title').text();
    console.log(title); // returns 'Google'
  });
  
}

// queryGoogle();
getGoogleTitle();
const request = require('request');

function queryGoogle() {
  request.get('http://www.google.com', (err, response, body) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(body);
  });
}

queryGoogle();
const Router = require('express').Router;
const version = require('../../package.json').version
const env = require('dotenv').config();
const request = require('request');
const cheerio = require('cheerio');

module.exports = () => {
  const api = Router();

  api.get('/', (req, res) => {  
  	res.json({version});
  });

  api.get('/api/getUsdaUrl', (req, res) => {
    res.json({url: process.env.USDA_URL});
  });

  api.get('/api/query', (req, res) => {
    const upc = req.query.upc;
    request.get(`${process.env.USDA_URL}/ndb/search/list?qlookup=${upc}`, (err, response, body) => {
      if (err) res.json({err});
      let $ = cheerio.load(body.replace(/[\n\r\t]+/g, ''));
      const link = $($($($('.list-left table tr')[1])).children().slice(2).html()).attr('href').replace(/[\n\r\t]+/g, '');
      const text = $($($($('.list-left table tr')[1])).children().slice(2).html()).text().replace(/[\n\r\t]+/g, '');
      res.json({link, text})
    });
  });

  return api;
}
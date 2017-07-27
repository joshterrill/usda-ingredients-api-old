const Router = require('express').Router;
const version = require('../../package.json').version
const env = require('dotenv').config();

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
    res.json({upc});
  });

  return api;
}
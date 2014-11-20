var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('dashboard');
});

router.post('/', function(req, res) {
  res.end('ad');
});

module.exports = router;

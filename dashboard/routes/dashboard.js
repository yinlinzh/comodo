var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('dashboard',{name: '<b>英超</b>', score: 283, goals: 129,
    content: '<b>jijijij</b>', title: 'dashboard'});
});

router.post('/', function(req, res) {
  res.end('ad');
});

module.exports = router;

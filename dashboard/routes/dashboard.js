var express = require('express');
var router = express.Router();
//
//router.get('/', function(req, res) {
//  res.render('dashboard',{name: '<b>英超</b>', score: 263, goals: 129,
//    content: '<b>jijijij</b>', title: 'dashboard', greeting: '{{ greeting.text }}',
//    AngularJS: '{{"AngularJS"}}'
//  });
//});

router.get('/', function(req, res) {
  res.render('dashboard');
});

router.post('/', function(req, res) {
  res.end('ad');
});

module.exports = router;

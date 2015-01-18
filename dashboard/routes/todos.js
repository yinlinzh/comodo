/**
 * Created by Yinlin on 1/16/15.
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    //res.render('dashboard');
    var todos = [
        {action: "Buy Flowers", done: false},
        {action: "Get Shoes", done: false},
        {action: "Collect Tickets", done: true},
        {action: "Call Joe", done: false}
    ];
    res.json(todos);
});

router.post('/', function(req, res) {
    res.end('ad');
});

module.exports = router;
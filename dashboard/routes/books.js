/**
 * Created by Yinlin on 12/28/14.
 */

"use strict";

var express = require('express');
var router = express.Router();

var books =
    [
        {
            id: 98,
            name: 'Beginning Backbone.js',
            author: 'guru',
            year: 2013,
        },
        {
            id: 99,
            name: 'Angular js',
            author: 'freeman',
            year: 2014,
        }
    ];

router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    if(id > books.length) {
        next();
    }
    res.json(books[id - 1]);
});

router.post('/', function(req, res, next) {
    console.log(typeof(req.body));
    console.log(JSON.stringify(req.body));
    var book = req.body;
    book.id = 101;
    res.json(book);
});

router.get('/', function(req, res, next) {
    if(!books) {
        next();
    }
    res.header('Access-Control-Allow-Origin', '*');
    res.json(books);
});

module.exports = router;
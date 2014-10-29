'use strict';

// var system = require('system');
var url = 'http://www.premierleague.com/en-gb.html'; //system.args[1];
var page = require('webpage').create();
page.open(url, function (status) {
    if (status === 'success') {
        var val = page.evaluate(function () {
            var i,
                ret = [],
                ranks = document.querySelectorAll('table.leagueTable tr');
            ranks = Array.prototype.slice.call(ranks, 1, -1);
            for (i = 0; i < ranks.length; i++) {
                ret.push({
                    pos: ranks[i].querySelector('td.col-pos').innerText.trim(),
                    club: ranks[i].querySelector('td.col-club').innerText.trim(),
                    pld: ranks[i].querySelector('td.col-pld').innerText.trim(),
                    pts: ranks[i].querySelector('td.col-pts').innerText.trim()
                });
            }
            return ret;
        });
        console.log(val);
    }
    // phantom.exit(0);
});

'use strict';

// var system = require('system');
var url = 'http://cn.premierleague.com/zh-cn.html'; //system.args[1];
var page = require('webpage').create();
page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36';
page.open(url, function (status) {
    if (status === 'success') {
        var val = page.evaluate(function () {
            var i,
                ret = [],
                clubs = document.querySelectorAll('table.leaguetable td[class="club"] a');
            // ranks.shift();
            for (i = 0; i < clubs.length; i++) {
                // ret.push({
                //     // pos: ranks[i].querySelector('td.col-pos').innerText.trim(),
                //     club: clubs[i].innerText.trim()
                //     // pld: ranks[i].querySelector('td.col-pld').innerText.trim(),
                //     // pts: ranks[i].querySelector('td.col-pts').innerText.trim()
                // });
                ret.push(clubs[i].innerText.trim());
            }
            return ret;
        });
        console.log(val);
    }
    // phantom.exit(0);
});

'use strict';

var system = require('system'),
    url = system.args[1],
    page = require('webpage').create();

page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36';

page.open(url, {encoding: "utf8"}, function (code) {
    if (code === 'success') {
        var target = page.evaluate(function() {
            var elem = document.querySelector('span.txt')
            var evt = document.createEvent('MouseEvents')
            evt.initMouseEvent('click', true, true, window, 1 , 1,1,1,1, false, false, false, false, 0, elem);
            elem.dispatchEvent(evt)
        });
        // page.sendEvent('click', target.X, target.Y);
        page.render('shentie.png');
        console.log('Success, page saved.');
        phantom.exit(0)
    } else {
        phantom.exit(1);
    }
});
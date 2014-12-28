'use strict';

var Browser = require("zombie");

var browser = new Browser({ debug: true });
//browser.runScripts = false

browser.visit('http://www.baidu.com')
  .then(function() {
    console.log("The page:", browser.html());
  })
//  .fail(function(error) {
//    console.log("Not good:", error)
//  });
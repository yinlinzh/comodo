var page = require('webpage').create();
page.open('http://www.baidu.com', function(status) {
  if(status == 'success') {
    console.log(page.title);
  } else {
    console.log('Page failed to load.');
  }
  phantom.exit(0);
});

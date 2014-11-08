var fs = require('fs');
fs.stat('/etc/passwd', function(err, stat) {
    if(err) throw err;
    console.log(stat);
});

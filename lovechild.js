process.on('message', function(msg) {
    console.log('Parent said: ' , msg);
//    process.exit(1);
    process.send('I love you, too');
    process.exit(1);
});

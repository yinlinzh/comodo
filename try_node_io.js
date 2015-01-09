/**
 * Created by Yinlin on 1/8/15.
 */


var accountStr = '{"name": "Jedi", "members": ["Yoda", "Obi Wan"],' +
    '"number": 34512, "location": "A galaxy far, far away"}';

var accountObj = JSON.parse(accountStr);
console.log(accountObj.name);
console.log(accountObj.members);


console.log(JSON.stringify(accountObj));

var buf256 = new Buffer(256);
buf256.fill(0);
buf256.write('abc', 'utf-8'); //, 'utf-8');
console.log(buf256); //.toString());

buf256.writeInt8(19, 4);
console.log(buf256); //.toString());

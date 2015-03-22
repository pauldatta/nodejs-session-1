// More - http://codewinds.com/blog/2013-08-04-nodejs-readable-streams.html

var crypto = require('crypto');
var fs = require('fs');

var readStream = fs.createReadStream('./data/10.txt');
var hash = crypto.createHash('sha1');
readStream
  .on('data', function (chunk) {
    hash.update(chunk);
  })
  .on('end', function () {
    console.log(hash.digest('hex'));
  });
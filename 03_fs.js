var util = require('util');
var fs = require('fs');

function readFile(str, callback){
  var lines = [];
  fs.readFile(str, function (err, data) {
    if (err) throw err;
    lines.push(data);
    console.log(data.toString());
    callback(lines);
  });
}

readFile('./data/20.txt', function(data) {
  console.log("Read 20");
});

readFile('./data/10.txt', function(data) {
  console.log("Read 10");
});


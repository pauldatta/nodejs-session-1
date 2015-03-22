var querystring = require('querystring');
var result = querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
result += "\n" + querystring.stringify({foo: 'bar', baz: 'qux'}, ';', ':');
result += "\n" + querystring.parse('foo=bar&baz=qux&baz=quux&corge');
console.log(result);
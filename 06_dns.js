var dns = require('dns');
dns.lookup('www.google.com', function onLookup(err, addresses, family) {
  console.log('addresses:', addresses);
});

// Actual Name resolution
dns.resolve4('www.google.com', function (err, addresses) {
  if (err) throw err;
  console.log('addresses: ' + JSON.stringify(addresses));
  addresses.forEach(function(a) {
    dns.reverse(a, function(err, domains) {
      if (err) throw err;
      console.log('reverse for ' + a + ': ' + JSON.stringify(domains));
    });
  });
});
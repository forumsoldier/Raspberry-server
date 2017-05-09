var fs = require('fs');

fs.readFile('./master.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/deck-1-8-8-10-11/g, '1/deck-1-8-8-10-11');

  fs.writeFile('./master_fix.html', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
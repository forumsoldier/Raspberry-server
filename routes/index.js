var express = require('express');
var router = express.Router();
var auth = require('basic-auth');
var username = "instructor";
var password = "apass";

router.get('/1', function (req, res, next) {
  var credentials = auth(req);
  if (!credentials || credentials.name !== username || credentials.pass !== password) {
  res.statusCode = 401;
  res.setHeader('WWW-Authenticate', 'Basic realm="example"');
  res.end();
  } else {
  res.render('/pres/master1.html');
  }
});


module.exports = router;

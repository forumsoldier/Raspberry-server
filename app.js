

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var routes = require('./routes/index');
var auth = require('basic-auth');
var ss = require('serve-static');
var fs = require('fs');

var app = express();

function entry (req, res, next){
    var objUser = auth(req);
    if (objUser === undefined || objUser.name !== "john" || objUser.pass !== "1234"){
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required')
        res.status(401).end()
    }else{
        next();
    }
}








var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

// view engine setup
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  partialsDir: ['views/partials/']
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());




//serversetup
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
var io = require('socket.io')(server);
io.sockets.on('connection', function (socket) {
   socket.on('multiplex-statechanged', function(data) {
		if (typeof data.secret == 'undefined' || data.secret == null || data.secret === '') return;
		if (createHash(data.secret) === data.socketId) {
			data.secret = null;
			socket.broadcast.emit(data.socketId, data);
		};
	});
});


//routes
app.use('/', express.static(path.join(__dirname, 'public')))


/*======================== EDIT ROUTES BELOW ================================*/

//this is for the client presentations
app.use("/reveal", ss(__dirname + "/pres/reveal_presentation/static_files",{'index':'index.html'})); 
// this is for the master presentation
app.use("/revealm",entry,ss(__dirname + "/pres/reveal_presentation",{'index':'master.html'})); 

/*======================== EDIT ROUTES ABOVE ================================*/


app.post('/handbook', function(req,res) {
    var htmldata = req.body.data;
    var name = req.body.user.replace(/ /g,"-");
    var email = req.body.email;
    if (name != ""){
        fs.writeFile("handbooks/"+name+".html", htmldata, { flag: 'w' }, function (err) {
        if (err) throw err;
             console.log("It's saved!");
        });
        res.end("success");
    }else {
        res.end("failed, fill out name");
    }
   
    
    
});



//Id Generator revealjs
app.get("/token", function(req,res) {
	var ts = new Date().getTime();
	var rand = Math.floor(Math.random()*9999999);
	var secret = ts.toString() + rand.toString();
	res.send({secret: secret, socketId: createHash(secret)});
});
var createHash = function(secret) {
	var cipher = crypto.createCipher('blowfish', secret);
	return(cipher.final('hex'));
};

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
/// error handlers

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            title: 'error'
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
    });
});


module.exports = app;


//var fs = require('fs');

//function renderHTML(path, response){
//  fs.readFile(path, null, function(error, data){
//      if (error){
//        response.writeHead(404);
//        response.write('file not found!');
//      } else {
//       response.write(data);
//     }
//      response.end();
//    });
//}

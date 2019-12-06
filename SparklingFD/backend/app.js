var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser  = require('body-parser');
var flash = require("connect-flash");
var session = require("express-session");
var passport = require("./config/passport");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var companiesRouter = require('./routes/companies');
var searchRouter = require('./routes/searches')
var cardsRouter = require('./routes/cards');
var setRouter = require('./routes/setreviews');


var app = express();

// var router = require('./routes')(app, User);
// const usersRouter = require('./routes/users.js')(app, User);

var mongoose    = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
  console.log('DB connection good.');
})
mongoose.connect("mongodb://localhost:27017/Cracker", { useNewUrlParser: true});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/getCompanyInfo', companiesRouter);
app.use('/api/searchQuery', searchRouter);
app.use('/api/getReview', cardsRouter);
app.use('/api/setReview', setRouter);
app.use('/api/cards', cardsRouter);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(flash());
app.use(session({secret:"JuhoKim", resave:true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());

// Custom Middlewares
app.use(function(req,res,next){
  res.locals.isAuthenticated = req.isAuthenticated();
  res.locals.currentUser = req.user;
  next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

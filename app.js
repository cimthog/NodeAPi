const express = require('express'),
app = express();
bodyParser = require('body-parser')
path = require('path')
const session = require('express-session');
const flash = require('connect-flash')
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/my_db");
mongoose.Promise = global.Promise;
const connection = mongoose.connection;
connection.on('connected', () => console.log("Successfully connected to database"));
connection.on('err', () => console.log("Failed to connect to db"));


//import routes
const index = require('./server/routes/api')

app.use( express.static(path.join(__dirname,'/server/public')));

//Express-session init
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true,
}))

//COnnect Flash
app.use(flash());

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    // res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    // res.locals.user = req.user || null;
    next();
})


//set routes)
app.use('/',index)
app.use('/register',index)


const port = process.env.NODE_ENV === 'production' ? 80 : 3000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
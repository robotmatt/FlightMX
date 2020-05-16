// Dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require('path');
const aircraftRouter = require('./routes/aircraft_routes')
const logbookRouter = require('./routes/logbook_routes')
const userRouter = require('./routes/user_routes')
const User = require('./models/user');

// Global Constants
const mongodbRemoteDev = true; // true to use (MLab production instance)
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(User.authenticate()));

// Serve up static routes
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    //app.use('*', express.static('client/build'));
}

app.post('/register', function (req, res) {
    console.log(req.body);
    User.register(new User({
        username: req.body.username
    }), req.body.password, function (err, user) {
        if (err) {
            console.log(err)
            res.redirect('/register');
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/home');
        });
    });
});

app.post('/login', passport.authenticate('local'), function (req, res) {
    res.redirect('/home');
});

app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

app.use('/api/aircraft', aircraftRouter);
app.use('/api/logbook', logbookRouter);
app.use('/api/user', userRouter);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// mongodb connection init 
if (process.env.MONGODB_URI) { // Heroku
    mongoose.connect(process.env.MONGODB_URI);
} else if (mongodbRemoteDev) { // remote dev
    mongoose.connect(process.env.MONGODB_REMOTE);
} else { // local dev
    mongoose.connect(process.env.MONGODB_LOCAL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

app.listen(PORT, function () {
    console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT} in your browser.`)
})
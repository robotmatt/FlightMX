// Dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const aircraftRouter = require('./routes/aircraft_routes')

// Global Constants
const mongodbRemoteDev = false; // true to use (MLab production instance)
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static routes
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use('/aircraft', aircraftRouter);

// mongodb connection init 
if (process.env.MONGODB_URI) { // Heroku
    mongoose.connect(process.env.MONGODB_URI);
} else if (mongodbRemoteDev) { // remote dev
    mongoose.connect(process.env.MONGODB_REMOTE);
} else { // local dev
    mongoose.connect(process.env.MONGODB_LOCAL, { useNewUrlParser: true, useUnifiedTopology: true });
}

app.listen(PORT, function () {
    console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT} in your browser.`)
})
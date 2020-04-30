//Dependencies
require('dotenv').config({ path: '../.env' });
const mongoose = require("mongoose");
const db = require("../models"); // model objects
const seedObj = require("../orm/mongoose/seeds"); // seed data objects

// Global Constants
const mongodbRemoteDev = false; // true to use (MLab production instance)

// mongodb connection init 
if (process.env.MONGODB_URI) { // Heroku
    mongoose.connect(process.env.MONGODB_URI);
} else if (mongodbRemoteDev) { // remote dev
    mongoose.connect(process.env.MONGODB_REMOTE, { useNewUrlParser: true, useUnifiedTopology: true });
} else { // local dev
    mongoose.connect(process.env.MONGODB_LOCAL, { useNewUrlParser: true, useUnifiedTopology: true });
}

console.log(__dirname);

// Drops existing collections and recreates seed collections
mongoose.connection.dropDatabase()
    .then(() => {
        console.log("Existing MongoDB dropped and recreated from ../models\n");

        // Aircraft data import, populates data from mongoose/seeds/aircraft.js via index.js
        db.Aircraft.deleteMany({})
            .then(() => db.Aircraft.collection.insertMany(seedObj.Aircraft))
            .then((data) => {
                console.log(`aircraft document: ${data.result.n} records populated!`);
            })
            .then(() => mongoose.disconnect())
            .catch((err) => {
                console.error(err);
                process.exit(1);
            });

        // Logbook data import, populates data from mongoose/seeds/logbook.js via index.js
        db.Logbook.deleteMany({})
            .then(() => db.Logbook.collection.insertMany(seedObj.Logbook))
            .then((data) => {
                console.log(`logbook document: ${data.result.n} records populated!`);
            })
            .then(() => mongoose.disconnect())
            .catch((err) => {
                console.error(err);
                process.exit(1);
            });

        // User data import, populates data from mongoose/seeds/user.js via index.js
        db.User.deleteMany({})
            .then(() => db.User.collection.insertMany(seedObj.User))
            .then((data) => {
                console.log(`user document: ${data.result.n} records populated!`);
            })
            .then(() => mongoose.disconnect())
            .catch((err) => {
                console.error(err);
                process.exit(1);
            });
    });
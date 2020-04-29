//Dependencies
const mongoose = require("mongoose");
const db = require("../models"); // model objects
const seedObj = require("../orm/mongoose/seeds"); // seed data objects

// Connection 
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/dev_nosql",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Drops existing collections.
mongoose.connection.dropDatabase();
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

// loop array of mongoDB collection names (future dynamic refactor).
// Object.keys(mongoose.connection.collections).forEach(e => {
//     let collectionName = e.substring(1, 0).toUpperCase() + e.substring(1, e.length);
//     console.log(collectionName)
// });
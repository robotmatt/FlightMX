require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

const aircraftRouter = require('./routes/aircraft_routes')

//Define middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve up static routes

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use('/aircraft', aircraftRouter);

// mongodb connection init 

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dev_nosql', { useNewUrlParser: true, useUnifiedTopology: true })
// } catch (error) {
//     console.log(error);
// }

app.listen(PORT, function () {
    console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT} in your browser.`)
}) 
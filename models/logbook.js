// Dependencies
const mongoose = require("mongoose");

// Global Constant
const Schema = mongoose.Schema;

// Create Schema 
const logbookSchema = new Schema({
    aircraft_id: { type: String },
    tail_number: { type: String },
    entry_date: { type: Date },
    type: { type: String },
    entry_note: { type: String },
    created: { type: Date, default: Date.Now },
    modified: { type: Date, default: Date.Now }
})

// chainable query helpers - db.Logbook.findOne().byTail('OMOOAFM1281').exec(function (err, planes) {console.log(planes);});
logbookSchema.query.byTail = function (tail_number) {
    return this.where({ tail_number: new RegExp(tail_number, 'i') });
};
logbookSchema.query.byAircraftId = function (aircraft_id) {
    return this.where({ aircraft_id: new RegExp(aircraft_id, 'i') });
};
logbookSchema.query.byType = function (type) {
    return this.where({ type: new RegExp(type, 'i') });
};

const Logbook = mongoose.model("Logbook", logbookSchema);
module.exports = Logbook; 
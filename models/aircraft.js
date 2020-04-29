// Dependencies
const mongoose = require("mongoose");

// Global Constant
const Schema = mongoose.Schema;

// Create Schema
const logWriterSchema = new Schema({ userId: String });
const aircraftSchema = new Schema({
    make: { type: String },
    model: { type: String },
    year: { type: Number },
    tail_number: { type: String },
    note: { type: String },
    users: [logWriterSchema],
    created: { type: Date, default: Date.Now },
    modified: { type: Date, default: Date.Now }
})

// chainable query helpers - db.Aircraft.findOne().byTail('OMOOAFM1281').exec(function (err, planes) {console.log(planes);});
aircraftSchema.query.byId = function (_id) {
    return this.where({ tail_number: new RegExp(_id, 'i') });
};
aircraftSchema.query.byTail = function (tail_number) {
    return this.where({ tail_number: new RegExp(tail_number, 'i') });
};
aircraftSchema.query.byMake = function (make) {
    return this.where({ make: new RegExp(make, 'i') });
};
aircraftSchema.query.byModel = function (model) {
    return this.where({ model: new RegExp(model, 'i') });
};

const Aircraft = mongoose.model("Aircraft", aircraftSchema);
module.exports = Aircraft;
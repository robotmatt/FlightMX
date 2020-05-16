//Dependencies
const db = require("../models"); // model objects

// returns ARRAY, all logbook entries 
logbook_list = (req, res) => {
    db.Logbook.find({})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot find Logbook with id=${req.params.id}!`
                });
            } else res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: `Error in finding Logbook with id=${req.params.id}.`
            });
        })
};

// returns ARRAY, all logbook entries of aircraftID
logbook_by_aircraft_id = (req, res) => {
    db.Logbook.find({ aircraft_id: req.params.aircraft_id })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot find Logbook(s) with id=${req.params.id}!`
                });
            } else res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: `Error in finding Logbook(s) with id=${req.params.id}.`
            });
        })
};

// returns ARRAY, all logbook entries of aircraftID of type
logbook_by_id_type = (req, res) => {
    db.Logbook.find({ aircraft_id: req.params.aircraft_id, type: req.params.type })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot find Logbook(s) with id=${req.params.id}!`
                });
            } else res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: `Error in finding Logbook(s) with id=${req.params.id}.`
            });
        })
};

// returns OBJECT, single logbook via _id 
logbook_by_id = (req, res) => {
    db.Logbook.findById(req.params.id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot find Logbook with id=${req.params.id}!`
                });
            } else res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: `Error in finding Logbook with id=${req.params.id}.`
            });
        })
};

// Creates new Logbook entry - requires aircraft_id for association
// Form data required: (type:, entry_note:)
// Returns new Logbook document
logbook_id_create = (req, res) => {
    if (!req.params.aircraft_id) {
        res.status(400).send({ message: "Logbook Aircraft data must exists!" });
        return;
    }
    // find associated aircraft for logbook entry
    db.Aircraft.findById(req.params.aircraft_id)
        .then(aircraft => {
            // create logbook entry
            const newEntry = new db.Logbook({
                aircraft_id: req.params.aircraft_id, // url parameter 
                tail_number: aircraft.tail_number, // database retrieval 
                type: req.body.type, // form data
                entry_note: req.body.entry_note, // form data
                entry_date: new Date() // calculated 
            });
            newEntry
                .save(newEntry)
                .then(data => {
                    res.send(data);
                })
                // logbook error catch
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "An error occurred while creating the Logbook entry."
                    });
                });
        })
        // aircraft error catch
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occurred while retrieving associated aircraft record."
            })
        });
}

logbook_tail_create = (req, res) => {
    if (!req.params.tail_number) {
        res.status(400).send({ message: "Logbook Aircraft data must exists!" });
        return;
    }
    console.log(req.body.tail_number)
    // find associated aircraft for logbook entry
    db.Aircraft.find({ tail_number: req.params.tail_number })
        .then(aircraft => {
            // create logbook entry
            const newEntry = new db.Logbook({
                tail_number: req.body.tail_number,
                type: req.body.type, // form data
                entry_note: req.body.entry_note, // form data
                entry_date: new Date() // calculated 
            });
            newEntry
                .save(newEntry)
                .then(data => {
                    res.send(data);
                })
                // logbook error catch
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "An error occurred while creating the Logbook entry."
                    });
                });
        })
        // aircraft error catch
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occurred while retrieving associated aircraft record."
            })
        });
}

// returns OBJECT, updated logbook 
logbook_update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Logbook data can not be empty!"
        });
    }
    db.Logbook.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Logbook with id=${id}. Logbook was not found!`
                });
            } else res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Logbook with id=${id}.`
            });
        });
}

// returns OBJECT, single deleted logbook via id
logbook_delete = (req, res) => {
    db.Logbook.findByIdAndDelete(req.params.id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Logbook with id=${req.params.id}. Logbook was not found!`
                });
            } else res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Logbook with id=${req.params.id}.`
            });
        })
}

module.exports = {
    logbook_list,
    logbook_by_aircraft_id,
    logbook_by_id_type,
    logbook_by_id_type,
    logbook_by_id,
    logbook_id_create,
    logbook_tail_create,
    logbook_update,
    logbook_delete
}
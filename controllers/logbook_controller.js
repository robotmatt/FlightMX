//Dependencies
const db = require("../models"); // model objects

// returns ARRAY, all logbook entries 
logbook_list = function (req, res, next) {
    db.Logbook.find({})
        .then(function (logbook) {
            res.json(logbook)
        })
        .catch(function (err) {
            res.send(err);
        });
};

// returns ARRAY, all logbook entries of aircraftID
logbook_by_aircraft_id = function (req, res, next) {
    db.Logbook.find({ _id: req.params.id })
        .then(function (logbook) {
            res.json(logbook)
        })
        .catch(function (err) {
            res.send(err);
        });
};

// returns ARRAY, all logbook entries of aircraftID of type
logbook_by_id_type = function (req, res, next) {
    db.Logbook.find({ _id: req.params.id, type: req.params.type })
        .then(function (logbook) {
            res.json(logbook)
        })
        .catch(function (err) {
            res.send(err);
        });
};


// returns ARRAY,  all logbook entries of tail
logbook_by_tail = function (req, res, next) {
    db.Logbook.find({ tail_number: req.params.tail })
        .then(function (logbook) {
            res.json(logbook)
        })
        .catch(function (err) {
            res.send(err);
        });
};

// returns ARRAY, all logbook entries of tail of type
logbook_by_tail_type = function (req, res, next) {
    db.Logbook.find({ tail_number: req.params.tail, type: req.params.type })
        .then(function (logbook) {
            res.json(logbook)
        })
        .catch(function (err) {
            res.send(err);
        });
};


// returns OBJECT, single logbook via _id 
logbook_by_id = function (req, res) {
    db.Logbook.findById({ _id: req.params.id })
        .then(function (logbook) {
            res.json(logbook)
        })
        .catch(function (err) {
            res.send(err);
        });
};


logbook_create = function (req, res) {
    res.send('NOT READY: logbook create');
};

logbook_update = function (req, res) {
    res.send('NOT READY: logbook update');
};

// returns OBJECT, single deleted logbook via id
logbook_delete = function (req, res) {
    db.Logbook.findByIdAndDelete(req.params.id)
        .then(function (logbook) {
            console.log(`deleting logbook document:`);
            console.log(logbook)
            res.json(logbook);
        })
        .catch(function (err) {
            res.json(err);
        });
}

module.exports = {
    logbook_list,
    logbook_by_aircraft_id,
    logbook_by_id_type,
    logbook_by_tail,
    logbook_by_tail_type,
    logbook_by_id_type,
    logbook_by_id,
    logbook_create,
    logbook_update,
    logbook_delete
}

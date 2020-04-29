//Dependencies
const db = require("../models"); // model objects

// returns ARRAY, all aircraft
aircraft_list = function (req, res, next) {
  db.Aircraft.find({})
    .then(function (aircraft) {
      res.json(aircraft)
    })
    .catch(function (err) {
      res.send(err);
    });
};

// returns OBJECT, single aircraft via _id 
aircraft_by_id = function (req, res) {
  db.Aircraft.findById(req.params.id)
    .then(function (aircraft) {
      console.log(`findby_id: ${req.params.id}`, aircraft)
      res.json(aircraft)
    })
    .catch(function (err) {
      res.send(err);
    });
};

// returns OBJECT, single aircraft via tail_number
aircraft_by_tail = function (req, res) {
  db.Aircraft.findOne().byTail(req.params.tail_no)
    .then(function (aircraft) {
      console.log(aircraft)
      res.json(aircraft);
    })
    .catch(function (err) {
      res.json(err);
    });
};

aircraft_create = function (req, res) {
  res.send('NOT READY: aircraft create');
};

aircraft_update = function (req, res) {
  res.send('NOT READY: aircraft update');
};

// returns OBJECT, single deleted aircraft via id
aircraft_delete = function (req, res) {
  db.Aircraft.findByIdAndDelete(req.params.id)
    .then(function (aircraft) {
      console.log(`deleting aircraft document:`);
      console.log(aircraft)
      res.json(aircraft);
    })
    .catch(function (err) {
      res.json(err);
    });
}

module.exports = {
  aircraft_list,
  aircraft_by_id,
  aircraft_by_tail,
  aircraft_create,
  aircraft_update,
  aircraft_delete
}

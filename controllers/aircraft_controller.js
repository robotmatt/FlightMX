//Dependencies
const db = require("../models"); // model objects

// returns ARRAY, all aircraft
aircraft_list = (req, res) => {
  db.Aircraft.find({})
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot find an Aircraft!`
        });
      } else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error in finding Aircraft.`
      });
    })
};

// returns ARRAY, all aircraft(s) of user 
aircraft_by_user = (req, res) => {
  db.Aircraft.find({ "users.user_id": req.params.user_id })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot find an Aircraft!`
        });
      } else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error in finding Aircraft.`
      });
    })
};

// returns OBJECT, single aircraft via _id 
aircraft_by_id = (req, res) => {
  db.Aircraft.findById(req.params.id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot find Aircraft with id=${req.params.id}!`
        });
      } else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error in finding Aircraft with id=${req.params.id}.`
      });
    })
};

aircraft_create = (req, res) => {
  console.log(req.body)
  if (!req.params.user_id) {
    res.status(400).send({ message: "User & Aircraft data must exists!" });
    return;
  }
  // find associated user for aircraft entry
  db.User.findById(req.params.user_id)
    .then(user => {
      // create aircraft 
      const newAircraft = new db.Aircraft({
        make: req.body.make, // form data
        model: req.body.model, // form data
        year: req.body.year, // form data
        tail_number: req.body.tail_number, // form data
        note: req.body.note, // form data
        users: { user_id: req.params.user_id }
        // users: [{ userId: toString(user._id) }] // url param user_id confirmed by database retrieval
      });
      newAircraft
        .save(newAircraft)
        .then(data => {
          res.send(data);
        })
        // aircraft error catch
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "An error occurred while creating new aircraft."
          });
        });
    })
    // user error catch
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "An error occurred while retrieving associated user record."
      })
    });
};

// returns OBJECT, updated aircraft 
aircraft_update = function (req, res) {
  if (!req.body) {
    return res.status(400).send({
      message: "Aircraft data can not be empty!"
    });
  }
  db.Aircraft.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update aircraft with id=${req.params.id}. aircraft was not found!`
        });
      } else res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating aircraft with id=${req.params.id}.`
      });
    });

};

// returns OBJECT, single deleted aircraft via id
aircraft_delete = (req, res) => {
  db.Aircraft.findByIdAndDelete(req.params.id)
    .then(aircraft => {
      console.log(`deleting aircraft document:`);
      console.log(aircraft)
      res.json(aircraft);
    })
    .catch(err => {
      res.json(err);
    });
}

module.exports = {
  aircraft_list,
  aircraft_by_user,
  aircraft_by_id,
  aircraft_create,
  aircraft_update,
  aircraft_delete
}

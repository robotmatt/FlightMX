const express = require('express');
const router = express.Router();

const aircraft_controller = require('../controllers/aircraft_controller');

// list all aircraft - returns ARRAY
router.get('/', aircraft_controller.aircraft_list);

// list all users aircraft - returns ARRAY
router.get('/:user_id/user_id', aircraft_controller.aircraft_by_user);

// one aircraft by id - returns OBJ
router.get('/:id/id', aircraft_controller.aircraft_by_id);

// create aircraft 
router.post('/:user_id/user_id/create', aircraft_controller.aircraft_create);

// update aircraft 
router.post('/:id/update', aircraft_controller.aircraft_update);

// delete aircraft // delete logbook - returns deleted OBJ
router.get('/:id/delete', aircraft_controller.aircraft_delete);

module.exports = router;

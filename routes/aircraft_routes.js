const express = require('express');
const router = express.Router();

const aircraft_controller = require('../controllers/aircraft_controller');

// list all aircraft - returns ARRAY
router.get('/', aircraft_controller.aircraft_list);

// create aircraft 
router.get('/create', aircraft_controller.aircraft_create);

// update aircraft 
router.get('/:id/update', aircraft_controller.aircraft_update);

// one aircraft by id - returns OBJ
router.get('/:id/id', aircraft_controller.aircraft_by_id);

// one aircraft by tail no - returns OBJ
router.get('/:tail_no/tail', aircraft_controller.aircraft_by_tail);

// delete aircraft // delete logbook - returns deleted OBJ
router.get('/:id/delete', aircraft_controller.aircraft_delete);

module.exports = router;

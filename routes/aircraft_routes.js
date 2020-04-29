const express = require('express');
const router = express.Router();

const aircraft_controller = require('../controllers/aircraft_controller');

// list all aircraft
router.get('/', aircraft_controller.aircraft_list);

// create aircraft
router.get('/create', aircraft_controller.aircraft_create);

// update aircraft
router.get('/:id/update', aircraft_controller.aircraft_update);

// delete aircraft
router.get('/:id/delete', aircraft_controller.aircraft_delete);

// one aircraft by id
router.get('/:id/id', aircraft_controller.aircraft_by_id);

// one aircraft by tail no
router.get('/:tail_no/tail', aircraft_controller.aircraft_by_tail);

// list all aircraft
router.get('/aircraft', aircraft_controller.aircraft_list);

module.exports = router;

const express = require('express');
const router = express.Router();

const logbook_controller = require('../controllers/logbook_controller');

// list all logbook - returns ARRAY
router.get('/', logbook_controller.logbook_list);

// list all logbook by aircraft_id - returns ARRAY
router.get('/:id/aircraft_id', logbook_controller.logbook_by_aircraft_id);

// list all logbook by aircraft_id and type - returns ARRAY
router.get('/:id/aircraft_id/:type/type', logbook_controller.logbook_by_id_type);

// list all logbook by aircraft_tail - returns ARRAY
router.get('/:tail/tail', logbook_controller.logbook_by_tail);

// list all logbook by aircraft_tail and type - returns ARRAY
router.get('/:tail/tail/:type/type', logbook_controller.logbook_by_tail_type);

// one logbook by id - returns OBJ
router.get('/:id/id', logbook_controller.logbook_by_id);

// create logbook
router.get('/create', logbook_controller.logbook_create);

// update logbook 
router.get('/:id/update', logbook_controller.logbook_update);

// delete logbook - returns deleted OBJ
router.get('/:id/delete', logbook_controller.logbook_delete);

module.exports = router;

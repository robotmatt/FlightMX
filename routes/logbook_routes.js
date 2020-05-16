const express = require('express');
const router = express.Router();

const logbook_controller = require('../controllers/logbook_controller');

// list all logbook - returns ARRAY
router.get('/', logbook_controller.logbook_list);

// list all logbook by aircraft_id - returns ARRAY
router.get('/:aircraft_id/aircraft_id', logbook_controller.logbook_by_aircraft_id);

// list all logbook by tail_number - returns ARRAY
router.get('/tail_number/:tail_number', logbook_controller.logbook_by_tail_number);

// list all logbook by aircraft_id and type - returns ARRAY
router.get('/:aircraft_id/aircraft_id/:type/type', logbook_controller.logbook_by_id_type);

// one logbook by id - returns OBJ
router.get('/:id/id', logbook_controller.logbook_by_id);

// create logbook
router.post('/id_create/:aircraft_id', logbook_controller.logbook_id_create);

// create logbook - tail_number
router.post('/tail_create/:tail_number', logbook_controller.logbook_tail_create);

// update logbook 
router.post('/:id/update', logbook_controller.logbook_update);

// delete logbook - returns deleted OBJ
router.get('/:id/delete', logbook_controller.logbook_delete);

module.exports = router;


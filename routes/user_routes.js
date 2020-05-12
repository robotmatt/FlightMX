const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user_controller');

// list all users - returns ARRAY
router.get('/', user_controller.user_list);

// one user by id - returns OBJ
router.get('/:id/id', user_controller.user_by_id);

// create user 
router.post('/create', user_controller.user_create);

// update user 
router.post('/:id/update', user_controller.user_update);

// delete user // delete logbook - returns deleted OBJ
router.get('/:id/delete', user_controller.user_delete);

module.exports = router;

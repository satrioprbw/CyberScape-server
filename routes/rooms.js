const express = require('express');
const roomsController = require('../controllers/roomsController');
const router = express.Router();

router.get('/', roomsController.getAllRooms);
router.get('/top', roomsController.getTopCollection);
router.get('/:id', roomsController.getRoomById);

module.exports = router;

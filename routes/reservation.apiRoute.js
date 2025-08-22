const express = require('express');
const { createReservation } = require('../controller/reservationController');
const router = express.Router();

router.post('/send', createReservation);

module.exports = router;

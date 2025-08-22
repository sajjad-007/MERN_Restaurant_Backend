const { ErrorHandler } = require('../error/error');
const { reservationModel } = require('../models/ReservationSchema');

const createReservation = async (req, res, next) => {
  try {
    const { fullName, email, phoneNumber, date, time } = req.body;

    if (!fullName || !email || !phoneNumber || !date || !time) {
      return next(new ErrorHandler('Credentials Missing!', 401));
    }
    const reservation = await reservationModel.create({
      fullName,
      email,
      phoneNumber,
      date,
      time,
    });
    if (!reservation) {
      console.log('database create failed!');
      return next(new ErrorHandler("database coldn't save!", 401));
    }
    res.status(200).json({
      success: true,
      message: 'Reservation successfull',
        reservation,
    });

  } catch (error) {
    if(error.name === "ValidationError"){
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      )
      return next(new ErrorHandler(validationErrors.join(' ', ''), 400));
    }else{

      console.error('error from create reservation', error);
    }
  }
};

module.exports = { createReservation };

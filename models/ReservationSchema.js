const mongoose = require('mongoose');
const { Schema } = mongoose;

const reservationSchema = new Schema(
  {
    fullName: {
      type: String,
      required: ['Please enter your name'],
      // minLength: [2, 'minimum 2 character'],
      // maxLength: [30, 'maximum 30 character '],
    },
    email: {
      type: String,
      required: ['Enter your email'],
    },
    phoneNumber: {
      type: String,
      required: ['Enter your phone number'],
      // minLength: [11, 'minimum 11 digits'],
      // maxLength: [11, 'maximum 11 digits '],
    },
    date: {
      type: String,
      required: ['Enter your Reservation Date'],
    },
    time: {
      type: String,
      required: [ 'Enter your Reservation time'],
    },
  },
  { timestamps: true }
);

const reservationModel = mongoose.model('reservaation',reservationSchema)

module.exports = { reservationModel };

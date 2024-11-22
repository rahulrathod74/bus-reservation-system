const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  bus: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true },
  passenger: { type: mongoose.Schema.Types.ObjectId, ref: 'Passenger', required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Reservation', reservationSchema);

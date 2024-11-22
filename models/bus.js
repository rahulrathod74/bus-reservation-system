const mongoose = require('mongoose');
const Route = require('./route'); // Import the Route model

const busSchema = new mongoose.Schema({
  numberPlate: { type: String, required: true },
  capacity: { type: Number, required: true },
  operator: { type: mongoose.Schema.Types.ObjectId, ref: 'Operator', required: true },
  route: { type: mongoose.Schema.Types.ObjectId, ref: 'Route', required: true } // Reference the Route model
});

// Check if the model is already compiled
const Bus = mongoose.models.Bus || mongoose.model('Bus', busSchema);

module.exports = Bus;

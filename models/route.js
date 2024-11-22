const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  start: { type: String, required: true },
  destination: { type: String, required: true },
  distance: { type: Number, required: true }
});

// Check if the model is already compiled
const Route = mongoose.models.Route || mongoose.model('Route', routeSchema);

module.exports = Route;

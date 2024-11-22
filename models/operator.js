const mongoose = require('mongoose');

const operatorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  buses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bus' }],
});

module.exports = mongoose.model('Operator', operatorSchema);

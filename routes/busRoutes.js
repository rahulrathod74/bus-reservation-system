const express = require('express');
const Bus = require('../models/bus');
const router = express.Router();

// Create a Bus
router.post('/', async (req, res) => {
  try {
    const bus = new Bus(req.body);
    const savedBus = await bus.save();
    res.status(201).json(savedBus);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Buses
router.get('/', async (req, res) => {
  try {
    const buses = await Bus.find().populate('operator route');
    res.json(buses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Bus by ID
router.get('/:id', async (req, res) => {
  try {
    const bus = await Bus.findById(req.params.id).populate('operator route');
    if (!bus) return res.status(404).json({ error: 'Bus not found' });
    res.json(bus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a Bus
router.put('/:id', async (req, res) => {
  try {
    const updatedBus = await Bus.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBus) return res.status(404).json({ error: 'Bus not found' });
    res.json(updatedBus);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a Bus
router.delete('/:id', async (req, res) => {
  try {
    const deletedBus = await Bus.findByIdAndDelete(req.params.id);
    if (!deletedBus) return res.status(404).json({ error: 'Bus not found' });
    res.json({ message: 'Bus deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

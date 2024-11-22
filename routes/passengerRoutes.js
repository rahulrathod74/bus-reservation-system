const express = require('express');
const Passenger = require('../models/passenger');
const router = express.Router();

// Create a Passenger
router.post('/', async (req, res) => {
  try {
    const passenger = new Passenger(req.body);
    const savedPassenger = await passenger.save();
    res.status(201).json(savedPassenger);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Passengers
router.get('/', async (req, res) => {
  try {
    const passengers = await Passenger.find();
    res.json(passengers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Passenger by ID
router.get('/:id', async (req, res) => {
  try {
    const passenger = await Passenger.findById(req.params.id);
    if (!passenger) return res.status(404).json({ error: 'Passenger not found' });
    res.json(passenger);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a Passenger
router.put('/:id', async (req, res) => {
  try {
    const updatedPassenger = await Passenger.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPassenger) return res.status(404).json({ error: 'Passenger not found' });
    res.json(updatedPassenger);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a Passenger
router.delete('/:id', async (req, res) => {
  try {
    const deletedPassenger = await Passenger.findByIdAndDelete(req.params.id);
    if (!deletedPassenger) return res.status(404).json({ error: 'Passenger not found' });
    res.json({ message: 'Passenger deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

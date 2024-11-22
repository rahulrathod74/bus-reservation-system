const express = require('express');
const Reservation = require('../models/reservation');
const router = express.Router();

// Create a Reservation
router.post('/', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    const savedReservation = await reservation.save();
    res.status(201).json(savedReservation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Reservations
router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find().populate('bus passenger');
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Reservation by ID
router.get('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id).populate('bus passenger');
    if (!reservation) return res.status(404).json({ error: 'Reservation not found' });
    res.json(reservation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a Reservation
router.put('/:id', async (req, res) => {
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedReservation) return res.status(404).json({ error: 'Reservation not found' });
    res.json(updatedReservation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a Reservation
router.delete('/:id', async (req, res) => {
  try {
    const deletedReservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!deletedReservation) return res.status(404).json({ error: 'Reservation not found' });
    res.json({ message: 'Reservation deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

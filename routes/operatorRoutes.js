const express = require('express');
const Operator = require('../models/operator');
const router = express.Router();

// Create Operator
router.post('/', async (req, res) => {
  try {
    const operator = new Operator(req.body);
    const savedOperator = await operator.save();
    res.status(201).json(savedOperator);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Operators
router.get('/', async (req, res) => {
  try {
    const operators = await Operator.find().populate('buses');
    res.json(operators);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

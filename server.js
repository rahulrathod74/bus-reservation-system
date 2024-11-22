const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes Placeholder
app.use('/operators', require('./routes/operatorRoutes'));
app.use('/routes', require('./routes/routeRoutes'));
app.use('/buses', require('./routes/busRoutes'));
app.use('/passengers', require('./routes/passengerRoutes'));
app.use('/reservations', require('./routes/reservationRoutes'));

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

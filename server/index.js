const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const customerRoutes = require('./routes/customer.routes');
const bankerRoutes = require('./routes/banker.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/banker', bankerRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.get("/",(req,res)=>{
  res.send({status:false})
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

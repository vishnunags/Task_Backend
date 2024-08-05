const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors package
const taskRoutes = require('./routes/task.routes');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/tasks', taskRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

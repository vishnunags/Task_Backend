const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const taskRoutes = require('./routes/task.routes');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/tasks', taskRoutes);

// Start the server
const PORT = process.env.PORT || 8087;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

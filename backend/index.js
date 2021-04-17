const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');

const appRoutes = express.Router();
const PORT = 4000;

// Use
app.use(cors());
app.use(bodyParser.json());





app.use('/app', appRoutes);
// Start Server
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT)
})
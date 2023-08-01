const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(taskRoutes);

module.exports = app;

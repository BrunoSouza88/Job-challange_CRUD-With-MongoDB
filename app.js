const express = require('express');
const TaskRoutes = require('./routes/TaskRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(TaskRoutes);

module.exports = app;

const app = require('express');
const Router = require('express');

const TaskRoutes = app.Router();

TaskRoutes.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello World' });
})

module.exports = TaskRoutes;

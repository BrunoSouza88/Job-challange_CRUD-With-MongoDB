const express = require('express');
const { healthCheck, allTasks, newTask, deletedTask, updatedTask, getOneTask } = require('../controllers/tasksControllers');

const TaskRoutes = express.Router();

TaskRoutes.get('/', healthCheck);
TaskRoutes.get('/tasks', allTasks);
TaskRoutes.post('/tasks', newTask);
TaskRoutes.get('/tasks/:id', getOneTask);
TaskRoutes.delete('/tasks/:id', deletedTask);
TaskRoutes.put('/tasks/:id', updatedTask);

module.exports = TaskRoutes;

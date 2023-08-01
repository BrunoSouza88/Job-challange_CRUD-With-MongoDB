const { getAllTasks, getbyId, createTask, deleteTask, updateTask } = require("../services/tasksServices");

const healthCheck = (_req, res) => {
  return res.status(200).json({ message: `It's working` });
};

const allTasks = async (_req, res) => {
  try {
    const allTasks = await getAllTasks();
    return res.status(200).json(allTasks);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const getOneTask = async (req, res) => {
  const id = req.params.id;
  try {
    const task = await getbyId(id);
    return res.status(200).json(task);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

const newTask = async (req, res) => {
  const newTask = req.body;
  try {
    const createdTask = await createTask(newTask);
    return res.status(201).json(createdTask);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const deletedTask = async (req, res) => {
  const id = req.params.id;
  try {
    await deleteTask(id);
    return res.status(204).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

const updatedTask = async (req, res) => {
  const id = req.params.id;
  const task = req.body;
  try {
    await updateTask(id, task);
    return res.status(200).json({ message: 'Task updated successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { healthCheck, getOneTask, allTasks, newTask, deletedTask, updatedTask };

const Tasks = require("../models/Tasks");

const getAllTasks = async () => {
  try {
    const allTasks = await Tasks.find();
    return allTasks;
  } catch (error) {
    console.log(error);
  }
};

const getbyId = async (id) => {
  try {
    const task = await Tasks.findById(id);
    return task;
  } catch (error) {
    console.log(error);
  }
}

const createTask = async (task) => {
  try {
    const createdTask = await Tasks.create(task);
    return createdTask;
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (id) => {
  try {
    const deletedTask = await Tasks.findByIdAndDelete(id);
    return deletedTask;
  } catch (error) {
    console.log(error);
  }
}

const updateTask = async (id, task) => {
  try {
    const updatedTask = await Tasks.findByIdAndUpdate(id, task);
    return updatedTask;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getAllTasks, getbyId, createTask, deleteTask, updateTask };

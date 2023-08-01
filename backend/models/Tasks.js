const mongoose = require('mongoose');

const TasksSchema = new mongoose.Schema({
  // taskId: {
  //   type: Number,
  //   required: true,
  // },
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// If you want to use a taskId autoincrement, uncomment the commented lines:
// TasksSchema.plugin(autoIncrement.plugin, { model: 'Task', field: 'taskId' });

const Tasks = mongoose.model('Task', TasksSchema);

module.exports = Tasks;

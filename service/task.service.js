const taskDao = require('../dao/task.dao');

// Get all tasks
async function getTasks() {
    return await taskDao.getAllTasks();
}

// Add a new task
async function addTask(description) {
    return await taskDao.createTask(description);
}

// Delete a task
async function removeTask(id) {
    return await taskDao.deleteTask(id);
}

module.exports = {
    getTasks,
    addTask,
    removeTask
};

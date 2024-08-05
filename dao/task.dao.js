const db = require('../config/db');

// Get all tasks
async function getAllTasks() {
    const [rows] = await db.query('SELECT * FROM tasks');
    return rows;
}

// Create a new task
async function createTask(description) {
    const [result] = await db.query('INSERT INTO tasks (description) VALUES (?)', [description]);
    return result.insertId;
}

// Delete a task by ID
async function deleteTask(id) {
    await db.query('DELETE FROM tasks WHERE id = ?', [id]);
}

module.exports = {
    getAllTasks,
    createTask,
    deleteTask
};

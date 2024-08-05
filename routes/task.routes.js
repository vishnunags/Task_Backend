const express = require('express');
const router = express.Router();
const taskService = require('../service/task.service');

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await taskService.getTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks' });
    }
});

// Add a new task
router.post('/', async (req, res) => {
    const { description } = req.body;
    try {
        const newTaskId = await taskService.addTask(description);
        res.status(201).json({ id: newTaskId });
    } catch (error) {
        res.status(500).json({ message: 'Error adding task' });
    }
});

// Delete a task
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await taskService.removeTask(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task' });
    }
});

module.exports = router;

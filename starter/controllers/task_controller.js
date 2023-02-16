const Task = require('../models/task')

const getAllTask = async (req, res) => {
    const tasks = await Task.find({})
    res.status(201).json({ tasks })
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
}

const getSingleTask = async (req, res, next) => {
    const { id: taskId } = req.params
    const task = await Task.findOne({ _id: taskId })
    if (!task) {
        return next(`No task with such id: ${taskId}`, 404)
    }
    res.status(201).json({ task })
}

const updateTask = async (req, res, next) => {
    const { id: taskId } = req.params
    console.log('taskId', taskId)
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
        new: true,
        runValidators: true
    })

    if (!task) {
        return next(`No task with such id: ${taskId}`, 404)
    }
    res.status(201).json({ task })
}

const deleteTask = async (req, res) => {
    const { id: taskId } = req.params
    const task = await Task.findOneAndDelete({ _id: taskId })
    if (!task) {
        return next(`No task with such id: ${taskId}`, 404)
    }
    res.status(200).json({ task })
}

module.exports = {
    getAllTask,
    createTask,
    updateTask,
    deleteTask,
    getSingleTask
}
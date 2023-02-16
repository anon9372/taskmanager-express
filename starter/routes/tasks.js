const express = require('express')
const router = express.Router()

const {
    getAllTask,
    createTask,
    updateTask,
    deleteTask,
    getSingleTask
} = require('../controllers/task_controller')


// router.get('/', getAllTask)

// router.post('/', postTask)

// router.get('/:id', getSingleTask)

// router.put('/:id', updateTask)

// router.delete('/:id', deleteTask)

router.route('/').get(getAllTask).post(createTask)
router.route('/:id').put(updateTask).delete(deleteTask).get(getSingleTask)

module.exports = router
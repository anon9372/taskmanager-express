const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Must Provide name'],
        maxlength: [20, 'the task cannot be more that 20 characters']
    },

    completed: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model('task', TaskSchema)
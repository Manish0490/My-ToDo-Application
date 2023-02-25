const mongoose = require('mongoose')

const schema = mongoose.Schema

const todoSchema = new schema({
    taskID:{type: Number, required: true, unique:true},
    taskHeader: {type:String, required:true},
    taskContent: {type: String, required:false},
    taskDate:{type: Date, required: true}
},{
    timestamps: true
})

const todo = mongoose.model('Todo',todoSchema)

module.exports = todo
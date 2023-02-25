const router = require('express').Router()
const ToDo = require('../models/todo.model')


router.route('/').get((req,res)=>{
    ToDo.find()
    .then(todos=>  res.json(todos))
    .catch(err=> res.status(400).json(`Error caught  - ${err}`))
})

router.route('/addToDo').post((req,res)=>{
    const taskID = Number(req.body.taskID)
    const taskHeader= req.body.taskHeader
    const taskContent= req.body.taskContent
    const taskDate = Date(req.body.taskDate)

    const newTodo = new ToDo({
        taskID,
        taskHeader,
        taskContent,
        taskDate
    })

    newTodo.save()
    .then(()=>res.json("Task Added Successfully"))
    .catch(err=>res.status(400).json(`Failed to add task due to ${err}`))
})

module.exports = router

// build your `/api/tasks` router here
const express = require('express')
const tasks = require('./model')
const router = express.Router()

router.get('/', (req, res) => {
    tasks.find()
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/', async (req, res) => {
    try{
        const newTasks = await tasks.create(req.body)
        res.status(201).json(newTasks)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router
// build your `/api/projects` router here
const express = require('express')
const projects = require('./model')
const router = express.Router()

router.get('/', (req, res) => {
    projects.find()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/', async (req, res) => {
    try{
        const newProjects = await projects.create(req.body)
        res.status(201).json(newProjects)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router
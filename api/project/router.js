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
            const newProject = await projects.create(req.body)
            res.status(201).json(newProject)
        }catch(err){
            res.status(500).json(err)
        }
})

module.exports = router

// const projData = req.body;
// projects.create(projData)
//     .then(newProj => {
//         if(newProj.project_completed === 0) {
//             res.status(201).json({
//                 ...newProj,
//                 project_completed: false
//             })
//         } else {
//             res.status(201).json({
//                 ...newProj,
//                 project_completed: true
//             })
//         }
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
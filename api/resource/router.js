// build your `/api/resources` router here
const express = require('express')
const resources = require('./model')
const router = express.Router()

router.get('/', (req, res) => {
    resources.find()
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/', async (req, res) => {
    
    try{
        const newResource = await resources.create(req.body)
            res.status(201).json(newResource)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router
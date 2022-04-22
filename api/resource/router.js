// build your `/api/resources` router here
const express = require('express')
const resources = require('./model')
const router = express.Router()
const validateName = require('./middle-ware')

router.get('/', (req, res, next) => {
    resources.find()
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            next(err)       
         })
})

router.post('/', validateName, async (req, res, next) => {
    try{
        const newResource = await resources.create(req.body)
        res.status(201).json(newResource)
    }catch(err){
        next(err)
    }
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message:err.message,
        stack: err.stack
    })
})

module.exports = router
const db = require('../../data/dbConfig')

async function validateName(req,res,next){
    const [resource_name] = await db('resources').where('resource_name', req.body.resource_name)
    if(resource_name){
        next({status: 400, message: "Name already exist" })
    }else{
        next()
    }
} 

module.exports = validateName
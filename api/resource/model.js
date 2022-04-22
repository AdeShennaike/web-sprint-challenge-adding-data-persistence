// build your `Resource` model here
const db = require('../../data/dbConfig')

async function getById(id) {
    return db("resources").where("resource_id", id).first();
  }

async function create(resource) {
    const [resource_id] = await db('resources').insert(resource)
    return getById(resource_id) 
}

async function find() {
    return db('resources')
}

module.exports = {
    create,
    find
}
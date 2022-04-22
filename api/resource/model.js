// build your `Resource` model here
const db = require('../../data/dbConfig')

async function create(resource) {
    const rows = db('resources').insert(resource)
    return rows
}

async function find() {
    const rows = await db('resources')
    .select('resources.*')

    return rows
}

module.exports = {
    create,
    find
}
// build your `Task` model here
const db = require('../../data/dbConfig')

async function create(project) {
    const rows = db('tasks').insert(project)
    return rows
}

async function find() {
    const rows = await db('tasks')
    .select('tasks.*')

    return rows
}

module.exports = {
    create,
    find
}
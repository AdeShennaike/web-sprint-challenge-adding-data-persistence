// build your `Project` model here
const db = require('../../data/dbConfig')

async function create(project) {
    const rows = db('projects').insert(project)
    return rows
}

async function find() {
    const rows = await db('projects')
    .select('projects.*')

    return rows
}

module.exports = {
    create,
    find
}
// build your `Project` model here
const db = require('../../data/dbConfig')

async function getById(id) {
    const rows = await db("projects").where("project_id", id).first();
    rows.project_completed === 0 || !rows.project_completed
      ? (rows.project_completed = false)
      : (rows.project_completed = true);
    return rows;
  }
  
async function create(project) {
    const [project_id] = await db("projects").insert(project);
    return getById(project_id);
}

async function find() {
    const rows = await db('projects')
    rows.map(row => {
        row.project_completed = !!row.project_completed;
        return row;
    })
    return rows
}

module.exports = {
    create,
    find
}
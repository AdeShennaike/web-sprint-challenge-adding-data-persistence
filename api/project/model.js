// build your `Project` model here
const db = require('../../data/dbConfig')

// async function create(project) {
//     const rows = await db('projects').insert(project);
//     return rows
// }
async function getProjectById(id) {
    let project = await db("projects").where("project_id", id).first();
    project.project_completed === 0 || !project.project_completed
      ? (project.project_completed = false)
      : (project.project_completed = true);
    return project;
  }
  
  async function create(project) {
    const [project_id] = await db("projects").insert(project);
    return getProjectById(project_id);
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
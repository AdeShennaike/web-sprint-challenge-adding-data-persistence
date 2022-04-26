// build your `Task` model here
const db = require('../../data/dbConfig')

async function getById(id) {
    const rows = await db("tasks").where("task_id", id).first();
    rows.task_completed === 0 || !rows.task_completed
      ? (rows.task_completed = false)
      : (rows.task_completed = true);
    return rows;
  }
  
async function create(task) {
    const [task_id] = await db('tasks').insert(task)
    return getById(task_id)
}

async function find() {
    const rows = await db('tasks as t')
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select("t.*", "p.project_description", "p.project_name")

    rows.map(row => {
        row.task_completed = !!row.task_completed;
        return row;
    })
    return rows
}

module.exports = {
    create,
    find
}
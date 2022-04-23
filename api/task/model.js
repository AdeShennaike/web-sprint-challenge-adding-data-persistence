// build your `Task` model here
const db = require('../../data/dbConfig')

async function getById(id) {
    const rows = await db("tasks").where("task_id", id).first();
    rows.task_completed === 0 || !rows.task_completed
      ? (rows.task_completed = false)
      : (rows.task_completed = true);
    return rows;
  }
  
async function create(project) {
    // const [task_id] = db('tasks').insert(project)
    // return getById(task_id)

     await db('tasks')
        .insert(project)
    const newTask = await db('tasks')
        .where('task_description', project.task_description)
        .first()

        if(newTask.task_completed === 0){
            return {
                ...newTask,
                task_completed: false
            }
        } else {
            return {
                ...newTask,
                task_completed: true
            }
        }
}

async function find() {
    const rows = await db('tasks as t')
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id",
      "t.task_completed",
      "t.task_notes",
      "t.task_description",
      "p.project_description",
      "p.project_name")

    rows.map(row => {
        row.task_completed = !!row.task_completed;
        return row;
    })
    return rows}

module.exports = {
    create,
    find
}
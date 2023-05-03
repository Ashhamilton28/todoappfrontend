import Tasks from "./Tasks"

const TaskList = ({tasks, setTasks}) => {
  return (
    <article className="tasklist">
       <Tasks tasks={tasks} setTasks={setTasks} />
    </article>
  )
}

export default TaskList
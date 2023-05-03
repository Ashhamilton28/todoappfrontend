const Tasks = ({tasks, setTasks}) => {
  const handleEdit = (id,e, content) =>{
console.log(content)
e.target.parentElement.innerHTML = `<textarea rows="auto" cols="50">${content}</textarea>`
   
  }
  const handleDelete = (id) =>{
      console.log(id)
      //filter the tasks and return the elements that do not match given id
      const filteredTasks = tasks.filter(tsk=>tsk.id!==id)
      //set the new tasks to filtered tasks
      setTasks(filteredTasks)
      console.log("Delete task")
  }
  return (
      <ul>
          {tasks.map
          (task=>
          <li key={task.id} className="task">{task.content} <i className="fa-solid fa-pen-to-square" onClick={(e)=>handleEdit(task.id,e,task.content)}></i><i className="fa-solid fa-trash" onClick={()=>handleDelete(task.id)}>
          </i></li>
          )}
          </ul>
  )}

  export default Tasks
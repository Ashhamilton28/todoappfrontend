import { useState } from "react"

const Header = ({setTasks}) => {
    const [task, setTask]= useState('')
    console.log(task)
  const submitHandler = (e) => {
    e.preventDefault();
    // create a new task object
    const newTask = {
        id: crypto.randomUUID(),
        content:task
    }
    // set global tasks to a new array then add the new task to our new array
    setTasks((prev)=>[newTask,...prev])
    // reset the task bck to an empty string
    setTask('')
    
  };
  return (
    <header>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter a new task" className="form-control"  value={task} onChange={(e)=> setTask(e.target.value)} />
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </header>
  );
};

export default Header;
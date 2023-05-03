import { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AuthPage from './pages/AuthPage'


// import { Routes, Route } from 'react-router-dom';


// import NavBar from './components/NavBar';

import { getUser } from './utilities/users-service';



function App() {
  //setting initial state
  const [tasks, setTasks] = useState([
    {id: crypto.randomUUID(), content:'clean up.'},
    {id: crypto.randomUUID(), content:'clean up.'},
    {id: crypto.randomUUID(), content:'clean up.'},
    {id: crypto.randomUUID(), content:'clean up.'},
    {id: crypto.randomUUID(), content:'clean up.'},
    {id: crypto.randomUUID(), content:'clean up.'}
  
  ])
  const [user, setUser]= useState(getUser())
  return (
    <div className="theapp">
       { user ? 
      <>
       <Header setTasks={setTasks} />
      <div className="btn-container">
        <button className="btn btn-success" >All Tasks</button>
        <button className="btn btn-info">Completed Tasks</button>
      </div>
       {/* passing down the task state down to the children component */}
       <TaskList tasks={tasks} setTasks={setTasks} />
      </>
     : 
      <AuthPage setUser={setUser}/>
       }
    
    </div>
  );
}

export default App;
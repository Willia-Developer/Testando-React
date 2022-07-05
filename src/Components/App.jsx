
import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid'
import Tasks from "./Components/Tasks"
import "./App.css"
import AddTask from "./Components/AddTask";

const App = () => {

 const [tasks, setTasks] = useState([
  {
    id: "1",
    title: 'Estudar programação',
    completed: false,
  },
  {
    id: "2",
    title: "Ler Livros",
    completed: true,
  },
 ]);

 const handleAddTaskClick =(taskId) => {
  const newTasks = tasks.map((task) => {
    if (task.id === taskId) return {...task, completed: !task.completed}

    return task;
  });
  setTasks(newTasks);
 }

  const handleTaskAddition = (tasktitle) => {
    const newTasks = [...tasks, 
   { title: tasktitle,
    id: uuidv4(),
    completed: false,

    },
  ];
      setTasks(newTasks);
};

  return (
    <>
   <div className="container">
    <AddTask handleTaskAddition={handleTaskAddition} />
    <Tasks tasks={tasks} handleTaskClick={handleAddTaskClick}/>
   </div>

   </>   
  );
};

export default App;
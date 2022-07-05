
import React, {useState, useEffect} from "react";
import {v4 as uuidv4} from 'uuid'
import axios from "axios"
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Tasks from "./Components/Tasks"
import AddTask from "./Components/AddTask";
import Header from "./Components/Header";
import TaskDetails from "./Components/TaskDetails";

import "./App.css"

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

  useEffect(() => {
    const fetchTasks = async () => {

      const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')

     setTasks(data)
    };
    fetchTasks();
 },[]);


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

const handleTaskDeletion = (taskId) => {
  const newTasks = tasks.filter(task => task.id === taskId)

  setTasks(newTasks)
}

  return (
    <Router>
   <div className="container">
    <Header />
    <Route path='/' exact render={() =>(
      <>
            <AddTask handleTaskAddition={handleTaskAddition} />
    <Tasks tasks={tasks} handleTaskClick={handleAddTaskClick} handleTaskDeletion={handleTaskDeletion}/>
      </>
    )}
    />
    <Route path='/:taskTitle' exact component={TaskDetails}/>
   </div>
   </Router>   
  );
};

export default App;
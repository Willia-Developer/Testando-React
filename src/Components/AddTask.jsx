import React, {useState} from 'react';
import "./AddTask.css";
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
 
  const [inputData, setInputData] = useState('');

  const handleinputChange = (e) => {
         setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData('');
  };       
  
  return (
    <div className="add-task-container">
      
      <input onChange={handleinputChange} 
      value={inputData}
      className="add-task-input" type="text" />
      <div className="add-task-button-container"></div>
      <Button onClick={handleAddTaskClick}>Adicionar</Button>
    </div>
   
    );  
}
 
export default AddTask;
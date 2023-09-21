
import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  //handle inputs
  const handleChange=(e)=>{
    setNewTask(e.target.value);

  };
  //handle submit
  const addTask=()=>{
    const task={
      id:todoList.length===0?0:todoList[todoList.length-1].id+1,
      taskName:newTask
    }
    const newTaskItem=[...todoList,task];
    setTodoList(newTaskItem);
    //simplified
    // setTodoList([...todoList,newTask])

  };
  // const taskList=todoList.map((todos,key)=>{
  //   return <li key={key}>{todos}</li>
  // })

  const deleteTask=(id)=>{
    const taskItems=todoList.filter((task)=>{
      return task.id !==id;
    })
    setTodoList(taskItems);
    // simplified
    // setTodoList(todoList.filter((task)=> task !==taskName));
  }

return (
    <div className="App">
      <div className='addTask'>
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='taskList'>
        {todoList.map((todos,key)=>{
          return(
            <div>
              <li key={key}>{todos.taskName}</li>
              <button onClick={()=>deleteTask(todos.id)}> X </button>
            </div>
            
          )
        })}
        {/* {taskList} */}
      </div>

    </div>
  );
}

export default App;


import { useState } from 'react';
import './App.css';
import Tasks from './Tasks';
import TaskList from './TaskList';

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
      id:todoList.length===0?1:todoList[todoList.length-1].id+1,
      taskName:newTask,
      isCompleted:false
    }
    const newTaskItem=[...todoList,task];
    setTodoList(newTaskItem);
    setNewTask("")
    
    //simplified
    // setTodoList([...todoList,newTask])

  };
  // const taskList=todoList.map((todos,key)=>{
  //   return <li key={key}>{todos}</li>
  // })

  const updateTask=(id)=>{
    const updatedTasks=todoList.map((todos)=>{
      return todos.id==id?{...todos,isCompleted:true}:todos
    })
    setTodoList(updatedTasks)

  }

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
      <Tasks addTask={addTask} handleChange={handleChange} newTask={newTask} />

      <div className='taskList'>
        {todoList.map((todos)=>{
          return(
            <TaskList todos={todos} deleteTask={deleteTask} updateTask={updateTask}/>
            
          )
        })}
        {/* {taskList} */}
      </div>

    </div>
  );
}

export default App;

import React from 'react'

const TaskList = (props) => {
    console.log({...props})
  return (
    <div className='taskList'>
    {/* <li key={key}>{todos.taskName}</li> */}
    <h1 style={props.todos.isCompleted?{color:'green'}:{color:'red'}}>{props.todos.taskName}</h1>
    <button onClick={()=>props.updateTask(props.todos.id)}>completed</button>
    <button onClick={()=>props.deleteTask(props.todos.id)}> X </button>
  </div>
  )
}

export default TaskList;
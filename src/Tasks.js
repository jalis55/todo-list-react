import React from 'react'

const Tasks = (props) => {
  return (
    <div className='addTask'>
    <input type="text" onChange={props.handleChange} value={props.newTask} />
    <button onClick={props.addTask}>Add Task</button>
  </div>
  )
}

export default Tasks
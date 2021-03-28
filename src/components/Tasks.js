import Task from './Task' 

const Tasks = ({ tasks,onDelete, onToggle}) => {
  
  //.map() method which takes a function as an input and creates a list 
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
        ))}
    </>
  )
}

export default Tasks
 